/**
 * json相关工具方法
 */

/**
 * 解析json字符串，如果解析异常则返回指定的默认值
 * @param  {String} jsonStr json字符串
 * @param  {any} defaultValue 默认返回值，默认为空对象{}
 * @return {Object}         对象
 */
JSON.parseJSON = (jsonStr, defaultValue = {}) => {
  let json = defaultValue;

  try {
    json = JSON.parse(jsonStr) || defaultValue;
  } catch (e) {
    json = defaultValue;
  }

  return json;
};