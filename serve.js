/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

module.exports = require('ecstatic')({ root: require('absdir')(module) });
if (require.main === module) {
  require('http').createServer(module.exports
    ).listen(+process.env.PORT || 8080);
}
