#!/usr/bin/env bash

set -e

chmod +x \
    ./apiserver/resources/scripts/run.sh \
    ./apiserver/resources/scripts/test.sh \
    ./frontend/start.sh \
    ./frontend/test.sh

pip install -r ./apiserver/requirements.txt