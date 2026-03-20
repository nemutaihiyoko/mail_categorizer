FROM python:3.12-slim

WORKDIR /app

ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID

RUN groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME \
    && usermod -s /bin/bash $USERNAME \
    && apt-get update && apt-get install -y \
    bash \
    git \
    curl \
    build-essential \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

SHELL ["/bin/bash", "-c"]

# pipアップデート
RUN pip install --upgrade pip

# 依存関係（キャッシュを効かせる）
COPY apiserver/requirements.txt .
RUN pip install -r requirements.txt

# 所有権調整（重要）
RUN chown -R $USERNAME:$USERNAME /app

# 最後にユーザー切り替え
USER $USERNAME