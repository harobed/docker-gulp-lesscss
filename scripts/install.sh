#!/usr/bin/env bash
set -e

cd "$(dirname "$0")/../"

docker-compose run --rm nodejs yarn install