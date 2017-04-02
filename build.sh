#!/usr/bin/env bash
ng build --prod
appcache-manifest dist/*.{json,ico,html,js,webapp,css} dist/images/*.png --network-star -p /~christian/ww/app/ -o dist/ww.appcache
