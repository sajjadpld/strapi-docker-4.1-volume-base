#!/bin/sh
cd /opt/app

npm install
npm install --save @strapi/strapi
npm run build
npm run develop