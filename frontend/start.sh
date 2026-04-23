#!/usr/bin/env zsh
set -e

if [ -f package.json ]; then
  npm run dev
else
  echo "package.json not found. Add frontend package or customize this script."
fi
