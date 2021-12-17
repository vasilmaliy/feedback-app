const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
  alias({
    '@components': 'src/components',
    '@containers': 'src/containers',
    '@routes': 'src/routes',
    '@constants': 'src/constants',
    '@store': 'src/store',
    '@services': 'src/services',
  })(config);

  return config;
};
