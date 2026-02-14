FROM python:3.12-slim

WORKDIR /app

RUN apt-get update

# pipアップデート
RUN pip install --upgrade pip

# 一部ライブラリがビルドを必要とする可能性があるため最小限のビルドツールを入れる
RUN apt-get install -y --no-install-recommends build-essential gcc && rm -rf /var/lib/apt/lists/*

# 依存関係（キャッシュを効かせる）
COPY requirements.txt .
RUN pip install -r requirements.txt

# アプリケーションコードをコピー
COPY ./src .
RUN chmod +x ./entrypoint.sh

# FastAPI をデフォルトで 8000 ポートで公開
EXPOSE 8000