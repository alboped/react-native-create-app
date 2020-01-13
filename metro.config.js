/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => {
      console.log('start------');
      return {
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      };
    },
    babelTransformerPath: require.resolve('./transformers/style.js'),
  },
};
