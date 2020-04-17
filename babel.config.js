module.exports = api => {
  api.cache(true);

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'babel-plugin-root-import',
        {
          paths: [
            {
              rootPathPrefix: '@app',
              rootPathSuffix: './app/',
            },
            {
              rootPathPrefix: '@utils',
              rootPathSuffix: './app/utils/',
            },
            {
              rootPathPrefix: '@navigator',
              rootPathSuffix: './app/navigator/',
            }
          ]
        }
      ],
      [
        '@babel/plugin-proposal-decorators',
        {
          legacy: true
        }
      ]
    ],
  };
};
