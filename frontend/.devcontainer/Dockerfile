FROM node:24-slim

WORKDIR /app

# 必要なパッケージだけインストール
RUN apt-get update \
    && apt-get install -y \
    git \
    curl \
    build-essential \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# 既存の node ユーザーを使用
USER node