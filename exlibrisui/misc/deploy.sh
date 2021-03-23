#!/usr/bin/env bash

USER=$1
HOST=$2

# Build frontend
echo 'Running >> npm build >> ...'

#npm run build

# Copy to the remote server
ssh $USER@$HOST cd "../../var/www 
mkdir test2

scp -r ./build/* root@161.35.124.133:/var/www/html




# Log out from droplet

