const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '~/data': path.resolve(__dirname, 'src/data'),
      '~/ui': path.resolve(__dirname, 'src/ui')
    },
  };

  return config;
};