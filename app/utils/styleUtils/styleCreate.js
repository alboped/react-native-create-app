/**
 * 创建样式公共方法
 *   - 样式单位转换；
 *   - 自定义样式属性转换；
 */

import {StyleSheet} from 'react-native';

import styleTranslateMethods from './styleTranslateMethods';

/**
 * 递归样式对象
 * @param  {Object} obj 样式对象
 * @return {Object}
 */
const styleMap = obj => {
  let styleObj = {};
  const keys = Object.keys(obj);

  keys.forEach(key => {
    const item = obj[key];

    if (typeof item === 'object') {
      // 继续遍历
      styleObj[key] = styleMap(item);
    } else {
      let styleRes = false;

      styleTranslateMethods.find(method => {
        styleRes = method(key, item);
        if (styleRes) {
          return true;
        }
      });

      if (styleRes) {
        styleObj = {...styleObj, ...styleRes};
      } else {
        styleObj[key] = item;
      }
    }
  });

  return styleObj;
};

export default styles => {
  let styleObj = {};

  if (typeof styles === 'object') {
    styleObj = styleMap(styles);
  }

  return StyleSheet.create(styleObj);
};
