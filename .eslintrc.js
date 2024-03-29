module.exports = {
  extends: [
    './node_modules/dts-cli/conf/eslint-config-react-app/index.js',
    './node_modules/eslint-config-prettier/index.js',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['progressiveCounter.min.js'],
};
