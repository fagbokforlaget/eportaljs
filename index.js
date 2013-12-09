module.exports = process.env.EPORTALJS_COV
  ? require('./lib-cov/eportal')
  : require('./lib/eportal');

