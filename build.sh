#!/usr/bin/env bash
ng build
appcache-manifest dist/*.{ico,html,js,webapp,css} dist/images/*.png dist/assets/*.woff2 --network-star -p /~christian/ww/app/ -o dist/ww.appcache
