module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathPrefix: '@src',
            rootPathSuffix: './src/',
          },
          {
            rootPathPrefix: '@utils',
            rootPathSuffix: './src/utils/',
          },
          {
            rootPathPrefix: '@navigator',
            rootPathSuffix: './src/navigator/',
          },
          {
            rootPathPrefix: '@config',
            rootPathSuffix: './src/config/',
          },
          {
            rootPathPrefix: '@components',
            rootPathSuffix: './src/components/',
          },
        ],
      },
    ],
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
  ],
};
