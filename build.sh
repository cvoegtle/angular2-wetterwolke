#!/usr/bin/env bash
ng build
appcache-manifest dist/*.{ico,html,js,webapp,css} dist/images/*.png --network-star -p /~christian/ww/app/ -o dist/ww.appcache
