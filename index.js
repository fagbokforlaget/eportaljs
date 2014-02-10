module.exports = process.env.EPORTALJS_COV
  ? require('./lib-cov/client')
  : require('./lib/client');

