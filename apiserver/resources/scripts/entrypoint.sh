#!/usr/bin/env zsh

set -e

PORT=8000

cd ../../src

python -m uvicorn main:app --host 0.0.0.0 --port $PORT
