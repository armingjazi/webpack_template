const getConfig = require('./config_base');

module.exports = {
  mode: 'production',
  ...getConfig(),
};