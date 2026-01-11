FROM python:3.12-slim
WORKDIR /app

RUN apt-get update && apt-get install -y \
    git \
    curl \
    build-essential \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# pipアップデート
RUN pip install --upgrade pip

# 依存関係（キャッシュを効かせる）
COPY requirements.txt .
RUN pip install -r requirements.txt