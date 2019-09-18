module.exports = api => {
  api.cache(true);

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'root-import',
        {
          rootPathSuffix: './app/',
          rootPathPrefix: '@',
        },
      ],
    ],
  };
};
