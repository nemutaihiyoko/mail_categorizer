import os
import base64
from google.auth.transport.requests import Request
from googleapiclient.discovery import build
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow


class GmailService:
    def __init__(self, credentials_path="credentials.json", token_path="token.json"):
        self.scopes = ["https://www.googleapis.com/auth/gmail.readonly"]
        self.creds = None
        self._authenticate(credentials_path, token_path)
        self.service = build("gmail", "v1", credentials=self.creds)

    def _authenticate(self, credentials_path, token_path):
        if os.path.exists(token_path):
            self.creds = Credentials.from_authorized_user_file(token_path, self.scopes)
        if not self.creds or not self.creds.valid:
            if self.creds and self.creds.expired and self.creds.refresh_token:
                self.creds.refresh(Request())
            else:
                flow = InstalledAppFlow.from_client_secrets_file(
                    credentials_path, self.scopes
                )
                self.creds = flow.run_local_server(port=0)
            with open(token_path, "w") as token:
                token.write(self.creds.to_json())

    def get_gmails(self, max_results, unread_addresses):
        # Gmail検索クエリ
        query = "is:unread"

        # 除外アドレスがある場合はクエリに追加
        for addr in unread_addresses:
            clean_addr = addr.strip()
            if clean_addr:
                query += f" -from:{clean_addr}"

        results = (
            self.service.users()
            .messages()
            .list(userId="me", maxResults=max_results, q=query)
            .execute()
        )
        messages = results.get("messages", [])
        gmails = []
        for msg in messages:
            msg_data = (
                self.service.users().messages().get(userId="me", id=msg["id"]).execute()
            )
            subject = self._get_header(msg_data, "Subject")
            body = self._get_body(msg_data)
            gmails.append({"subject": subject, "body": body})
        return gmails

    def _get_header(self, msg, header_name):
        headers = msg["payload"]["headers"]
        for header in headers:
            if header["name"] == header_name:
                return header["value"]
        return "(`No Subject`)"

    def _decode_base64url_data(self, data):
        decoded_bytes = base64.urlsafe_b64decode(data)
        decoded_message = decoded_bytes.decode("UTF-8")
        return decoded_message

    def _get_body(self, msg):
        if "parts" in msg["payload"]:
            for part in msg["payload"]["parts"]:
                if part["mimeType"] == "text/plain":
                    return self._decode_base64url_data(part["body"]["data"])
        elif "body" in msg["payload"] and "data" in msg["payload"]["body"]:
            return self._decode_base64url_data(msg["payload"]["body"]["data"])
        return ""
