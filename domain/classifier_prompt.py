class PromptBuilder:
    def __init__(self, categories):
        self.categories = categories

    def build_prompt(self, gmail):
        categories_str = ", ".join(self.categories)
        prompt = f"""
以下のメールを、指定された区分（{categories_str}）のいずれかに分類してください。
分類結果のみを簡潔に返してください。

件名: {gmail.get("subject", "")}
本文: {gmail.get("body", "")}
"""
        return prompt.strip()
