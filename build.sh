#!/bin/bash -x

# Builds the site, saves in docs/

set -e
set -o pipefail

export NVM_DIR="$HOME/.nvm" 
	[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
	[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

cd app 
./node_modules/.bin/vue-cli-service build --mode production --target app --dashboard
cd ..
rm -rf docs
cp -r app/dist docs
echo 'nickandluke.com' > docs/CNAME
