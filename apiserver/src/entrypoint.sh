#!/bin/bash
set -e

# Default host/port
HOST=${HOST:-localhost}
PORT=${PORT:-8080}

# If UVICORN_RELOAD=1 then run with --reload (useful for development)
if [ "${UVICORN_RELOAD:-0}" = "1" ]; then
	echo "uvicorn main:app --host \"$HOST\" --port \"$PORT\" --reload"
	exec uvicorn main:app --host "$HOST" --port "$PORT" --reload
else
	echo "uvicorn main:app --host \"$HOST\" --port \"$PORT\""
	exec uvicorn main:app --host "$HOST" --port "$PORT"
fi