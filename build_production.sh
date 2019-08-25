#!/usr/bin/env bash

babel server.js --out-dir build
webpack --config ./webpack.production.config.js