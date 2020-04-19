/**
 * Object 全局方法
 */

/**
 * 检测对象是否为空对象（即 {}）
 * @param  {Object} object 待检测的对象
 * @return {Boolean}        是否有属性
 */
Object.isEmptyObject = object => {
  if (!typeof object === 'object') {
    throw Error('不是对象');
  }

  const keys = Object.keys(object);
  return keys.length === 0;
};
