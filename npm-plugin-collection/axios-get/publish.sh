#!/usr/bin/env bash
npm config set registry=https://registry.npmjs.org/
echo "login..."
npm login
echo "publishing..."
npm publish
npm config set registry=https://registry.npm.taobao.org/
echo "finish publish"
exit