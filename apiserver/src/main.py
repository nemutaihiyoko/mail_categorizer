import os
import json
import argparse
from dotenv import load_dotenv

from typing import List, Optional
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

from infrastructure.gmail_service import GmailService
from infrastructure.llm_service import GeminiService
from domain.filter_sensitive_data import gmailFilter
from domain.classifier_prompt import PromptBuilder

load_dotenv("../.env")
api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    print("GEMINI_API_KEYが設定されていません。")
max_gmails_per_request = int(os.getenv("MAX_GMAILS_PER_REQUEST", 3))

app = FastAPI()


def _load_settings():
    """Load settings from settings.json"""
    settings_path = os.path.join(os.path.dirname(__file__), "..", "settings.json")
    with open(settings_path, "r", encoding="utf-8") as f:
        return json.load(f)


def classify_gmails(categories: List[str], sensitive_keywords: List[str], unread_addresses: List[str], max_gmails: int):
    # 各サービスの初期化
    gmail_client = GmailService()
    gmail_filter = gmailFilter(sensitive_keywords) if sensitive_keywords else None
    prompt_builder = PromptBuilder(categories)
    llm_client = GeminiService(api_key)

    # メールを取得
    gmails = gmail_client.get_gmails(max_gmails, unread_addresses)
    results = []

    for gmail in gmails:
        # 秘匿情報をフィルタリング
        filtered_gmail = gmail_filter.filter(gmail) if gmail_filter else gmail

        # 分類用プロンプトを構築
        prompt = prompt_builder.build_prompt(filtered_gmail)

        # LLMリクエスト
        classification = llm_client.classify(prompt)

        results.append({
            "subject": filtered_gmail.get("subject"),
            "classification": classification,
        })

    return results


@app.get("/api/mails:classify")
def classify_endpoint():
    settings = _load_settings()
    
    categories = settings.get("categories", ["仕事", "プライベート", "スパム"])
    sensitive_keywords = settings.get("sensitive_keywords", [])
    unread_addresses = settings.get("unread_addresses", [])
    max_gmails = settings.get("default_max_mails", max_gmails_per_request)

    try:
        results = classify_gmails(categories, sensitive_keywords, unread_addresses, max_gmails)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    return {"results": results}



def main():
    categories = ["仕事", "プライベート", "スパム"]
    sensitive_keywords = []
    unread_addresses = []
    parser = argparse.ArgumentParser(description="Gmail分類ツール")
    parser.add_argument("--config_file", type=str, help="設定用JSONファイルを指定")
    config_file = parser.parse_args().config_file
    if config_file:
        with open(config_file, "r", encoding="utf-8") as f:
            config_data = json.load(f)
            unread_addresses = config_data.get("unread_addresses", [])
            sensitive_keywords = config_data.get("sensitive_keywords", [])

    results = classify_gmails(categories, sensitive_keywords, unread_addresses, max_gmails_per_request)

    for r in results:
        print(f"メール: {r.get('subject')}")
        print(f"分類: {r.get('classification')}")
        print("-" * 50)


if __name__ == "__main__":
    main()
