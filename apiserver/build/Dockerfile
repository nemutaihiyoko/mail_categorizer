FROM python:3.12-slim

WORKDIR /app

RUN apt-get update

# pipアップデート
RUN pip install --upgrade pip

# 依存関係（キャッシュを効かせる）
COPY requirements.txt .
RUN pip install -r requirements.txt

# アプリケーションコードをコピー
COPY ./src .
RUN chmod +x ./entrypoint.sh