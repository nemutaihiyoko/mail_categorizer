#!/usr/bin/env zsh
set -e
cd test
if [ -d test ] && [ "$(find test -maxdepth 1 -name '*.py' | wc -l)" -gt 0 ]; then
  python -m unittest discover -s test
else
  echo "No tests found in $(pwd)/test"
fi
