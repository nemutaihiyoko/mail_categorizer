import os
import json
import argparse
from dotenv import load_dotenv

from infrastructure.gmail_service import GmailService
from infrastructure.llm_service import GeminiService
from domain.filter_sensitive_data import gmailFilter
from domain.classifier_prompt import PromptBuilder

load_dotenv("../.env")
api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    print("GEMINI_API_KEYが設定されていません。")
max_gmails_per_request = int(os.getenv("MAX_GMAILS_PER_REQUEST", 3))


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

    # 各サービスの初期化
    gmail_client = GmailService()
    gmail_filter = gmailFilter(sensitive_keywords) if sensitive_keywords else None
    prompt_builder = PromptBuilder(categories)
    llm_client = GeminiService(api_key)

    # メールを取得
    gmails = gmail_client.get_gmails(max_gmails_per_request, unread_addresses)

    for gmail in gmails:
        # 秘匿情報をフィルタリング
        if gmail_filter:
            filtered_gmail = gmail_filter.filter(gmail)
        else:
            filtered_gmail = gmail

        # 分類用プロンプトを構築
        prompt = prompt_builder.build_prompt(filtered_gmail)

        # LLMリクエスト
        classification = llm_client.classify(prompt)

        # 結果を出力
        print(f"メール: {filtered_gmail['subject']}")
        print(f"分類: {classification}")
        print("-" * 50)


if __name__ == "__main__":
    main()
