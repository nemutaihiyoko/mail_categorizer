#!/usr/bin/env bash

set -e

chmod +x \
    ./apiserver/resources/scripts/entrypoint.sh \
    ./apiserver/resources/scripts/run.sh \
    ./apiserver/resources/scripts/test.sh \
    ./frontend/resources/scripts/entrypoint.sh \
    ./frontend/resources/scripts/run.sh \
    ./frontend/resources/scripts/test.sh

cd ./apiserver
pip install -r requirements.txt
cd ..


cd ./frontend
npm install
cd ..