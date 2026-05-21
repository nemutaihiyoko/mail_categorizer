#!/usr/bin/env zsh

set -e

PORT=8000

cd ../../src

python -m uvicorn main:app --reload --host 0.0.0.0 --port $PORT
