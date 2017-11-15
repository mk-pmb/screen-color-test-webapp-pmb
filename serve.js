/*jslint indent: 2, maxlen: 80, node: true */
'use strict';
module.exports = require('ecstatic')({ root: require('absdir')(module) });
require('http-listen')(module).loudListen();
