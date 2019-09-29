/**
 * 字符串处理全局方法扩展
 */

/**
 * 解析json字符串
 * @param  {String} jsonStr json字符串
 * @return {Object}         json对象
 */
String.parseJSON = (jsonStr, defaultValue = {}) => {
  let json = defaultValue;

  try {
    json = JSON.parse(jsonStr) || defaultValue;
  } catch (e) {
    json = defaultValue;
  }

  return json;
};
