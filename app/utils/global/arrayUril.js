/**
 * 数组操作相关工具方法；
 */

/**
 * 生成指定长度的数组
 * @param  {number} length 数组长度
 * @param {any}           填充值
 * @return {array}        生成的数组
 */
Array.fill = (length, fill) => {
  const array = new Array(length).fill(fill);

  if (typeof fill === 'function') {
    return array.map((value, ...args) => fill(...args));
  }

  return array;
};
