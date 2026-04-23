#!/usr/bin/env zsh
set -e
cd "$(dirname "$0")"
if [ -f package.json ]; then
  npm test
else
  echo "package.json not found. Add frontend package or customize this script."
fi
