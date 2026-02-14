import re


class gmailFilter:
    def __init__(self, sensitive_keywords):
        self.sensitive_keywords = sensitive_keywords

    def filter(self, gmail):
        filtered_gmail = gmail.copy()
        for key in ["subject", "body"]:
            if key in filtered_gmail:
                for keyword in self.sensitive_keywords:
                    filtered_gmail[key] = re.sub(
                        re.escape(keyword),
                        "[FILTERED]",
                        filtered_gmail[key],
                        flags=re.IGNORECASE,
                    )
        return filtered_gmail
