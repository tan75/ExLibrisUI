#!/usr/bin/env bash

HOST=$1

# Build frontend
echo 'Running >> npm build >> ...'

npm run build

# Copy to the remote server
ssh $HOST