#!/bin/bash -x

# Builds the site, saves in docs/

set -e
set -o pipefail

cd app 
./node_modules/.bin/vue-cli-service build --mode production --target app --dashboard
cd ..
rm -rf docs
cp -r app/dist docs
echo 'nickandluke.com' > docs/CNAME
