#!/usr/bin/env zsh
set -e
cd src
python -m uvicorn src.main:app --reload --host 0.0.0.0 --port 8000
