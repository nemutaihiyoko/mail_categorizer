#!/usr/bin/env bash

set -e

chmod +x \
    ./apiserver/resources/scripts/entrypoint.sh \
    ./apiserver/resources/scripts/run.sh \
    ./apiserver/resources/scripts/test.sh \
    ./frontend/resources/scripts/entrypoint.sh \
    ./frontend/resources/scripts/run.sh \
    ./frontend/resources/scripts/test.sh

# =========================
# apiserver
# =========================

cd ./apiserver

python3 -m venv .venv

source .venv/bin/activate

pip install --upgrade pip
pip install -r requirements.txt

cd ..

# =========================
# frontend
# =========================

cd ./frontend

npm install

cd ..