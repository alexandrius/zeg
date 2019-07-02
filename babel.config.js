module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:react-native-dotenv'],
    plugins: [
      ['module-resolver', {
        root: ['./src'],
        alias: {
          'components': './src/components',
          'hooks': './src/hooks',
          'styles': './src/styles',
          'router': './src/router',
          'utils': './src/utils'
        },
      }],
    ],
  };
};
