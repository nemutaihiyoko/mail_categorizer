from google import genai


class GeminiService:
    def __init__(self, api_key):
        self.client = genai.Client(api_key=api_key)
        self.model = "gemini-2.5-flash"

    def classify(self, prompt):
        response = self.client.models.generate_content(
            model=self.model, contents=prompt
        )
        return response.text.strip()
