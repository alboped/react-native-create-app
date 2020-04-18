const upstreamTransformer = require('metro-react-native-babel-transformer');

module.exports.transform = ({src, filename, options}) => {
  let res = {src, filename, options};
  if (filename.startsWith('app/') && filename.endsWith('.style.js')) {
    res = {
      src,
      filename,
      options,
    };
  }

  return upstreamTransformer.transform(res);
};
