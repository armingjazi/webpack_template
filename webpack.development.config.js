const getConfig = require('./config_base');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
...getConfig(),
};