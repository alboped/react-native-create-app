let upstreamTransformer = require('metro-react-native-babel-transformer');

module.exports.transform = ({src, filename, options}) => {
  let res = {src, filename, options};
  if (filename.startsWith('app/') && filename.endsWith('.style.js')) {
    console.log(filename);
    console.log(src);
    res = {
      src: `${src} console.log('啊啊啊啊啊啊啊啊啊啊========')`,
      filename,
      options,
    };
  }

  // "asdfasdf console.log('')".replace(/console\.log\(.*?\)/, '');

  return upstreamTransformer.transform(res);
};
