/**
 * 样式属性转换函数
 */

import {StyleSheet} from 'react-native';

import {rpx} from './screenUtil';

/* rpx字符串转为数字 */
const rpxNum = str => {
  // 纯数字直接返回数字
  if (Number.isNumber(str)) {
    return Number.parseFloat(str);
  }

  if (
    typeof str === 'string' &&
    str.endsWith('rpx') &&
    Number.isNumber(str.replace('rpx', ''))
  ) {
    return rpx(Number.parseFloat(str));
  } else {
    throw Error(`样式单位格式错误：rpx ----> ${str}`);
  }
};

/* 简写数值转换为数组 */
const value2Arr = str => str.replace(/[ ]+/g, ' ').split(' ');

/**
 * 像素单位转换
 * @param  {String} styleKey   样式属性key
 * @param  {any} styleValue   样式属性值
 * @return {Object}
 */
const rpx2px = (styleKey, styleValue) => {
  if (typeof styleValue === 'string' && styleValue.endsWith('rpx')) {
    return {
      [styleKey]: rpxNum(styleValue),
    };
  }

  return false;
};

/**
 * mergin样式转换
 * @param  {String} styleKey   样式属性key
 * @param  {any} styleValue   样式属性值
 * @return {Object}
 */
const parseMargin = (styleKey, styleValue) => {
  if (styleKey === 'margin' && typeof styleValue === 'string') {
    const values = value2Arr(styleValue);

    if (values.length === 1) {
      return {
        margin: rpxNum(values[0]),
      };
    } else if (values.length === 2) {
      return {
        marginVertical: rpxNum(values[0]),
        marginHorizontal: rpxNum(values[1]),
      };
    } else if (values.length === 3) {
      return {
        marginTop: rpxNum(values[0]),
        marginHorizontal: rpxNum(values[1]),
        marginBottom: rpxNum(values[2]),
      };
    } else if (values.length === 4) {
      return {
        marginTop: rpxNum(values[0]),
        marginRight: rpxNum(values[1]),
        marginBottom: rpxNum(values[2]),
        marginLeft: rpxNum(values[3]),
      };
    } else {
      throw Error('margin 样式格式错误：' + styleValue);
    }
  }

  return false;
};

/**
 * padding样式转换
 * @param  {String} styleKey   样式属性key
 * @param  {any} styleValue   样式属性值
 * @return {Object}
 */
const parsePadding = (styleKey, styleValue) => {
  if (styleKey === 'padding' && typeof styleValue === 'string') {
    const values = value2Arr(styleValue);

    if (values.length === 1) {
      return {
        padding: rpxNum(values[0]),
      };
    } else if (values.length === 2) {
      return {
        paddingVertical: rpxNum(values[0]),
        paddingHorizontal: rpxNum(values[1]),
      };
    } else if (values.length === 3) {
      return {
        paddingTop: rpxNum(values[0]),
        paddingHorizontal: rpxNum(values[1]),
        paddingBottom: rpxNum(values[2]),
      };
    } else if (values.length === 4) {
      return {
        paddingTop: rpxNum(values[0]),
        paddingRight: rpxNum(values[1]),
        paddingBottom: rpxNum(values[2]),
        paddingLeft: rpxNum(values[3]),
      };
    } else {
      throw Error(`padding样式格式错误：${styleValue}`);
    }
  }

  return false;
};

/**
 * borderRadius样式转换
 * @param  {String} styleKey   样式属性key
 * @param  {any} styleValue   样式属性值
 * @return {Object}
 */
const parseBorderRadius = (styleKey, styleValue) => {
  if (styleKey === 'borderRadius' && typeof styleValue === 'string') {
    const values = value2Arr(styleValue);

    if (values.length === 1) {
      return {
        borderRadius: rpxNum(values[0]),
      };
    } else if (values.length === 4) {
      return {
        borderTopLeftRadius: rpxNum(values[0]),
        borderTopRightRadius: rpxNum(values[1]),
        borderBottomRightRadius: rpxNum(values[2]),
        borderBottomLeftRadius: rpxNum(values[3]),
      };
    } else {
      throw Error(`borderRadius样式格式错误：${styleValue}`);
    }
  }

  return false;
};

/**
 * boxShadow样式转换
 * @param  {String} styleKey   样式属性key
 * @param  {any} styleValue   样式属性值
 * @return {Object}
 */
const parseBoxShadow = (styleKey, styleValue) => {
  if (styleKey === 'boxShadow' && typeof styleValue === 'string') {
    const values = value2Arr(styleValue);

    const shadowObj = {
      shadowOffset: {
        width: rpxNum(values[0]),
        height: rpxNum(values[1]),
      },
      shadowRadius: rpxNum(values[2]),
    };

    if (values.length === 4) {
      return {
        ...shadowObj,
        shadowColor: values[3],
      };
    } else if (values.length === 5) {
      return {
        ...shadowObj,
        shadowOpacity: Number.parseFloat(values[3]),
        shadowColor: values[4],
      };
    } else {
      throw Error(`boxShadow样式格式错误：${styleValue}`);
    }
  }

  return false;
};

/**
 * borderRadius样式转换
 * @param  {String} styleKey   样式属性key
 * @param  {any} styleValue   样式属性值
 * @return {Object}
 */
const parseBorder = (styleKey, styleValue) => {
  if (styleKey === 'border' && typeof styleValue === 'string') {
    const values = value2Arr(styleValue);

    if (values.length === 3) {
      return {
        borderWidth: rpxNum(values[0]),
        borderStyle: values[1],
        borderColor: values[2],
      };
    } else {
      throw Error(`border 样式格式错误：${styleValue}`);
    }
  }

  return false;
};

/**
 * 定位占满父元素属性转换
 * @param  {String} styleKey   样式属性key
 * @param  {any} styleValue   样式属性值
 * @return {Object}
 */
const absoluteFill = (styleKey, styleValue) => {
  if (styleKey === 'absoluteFill' && styleValue === true) {
    return StyleSheet.absoluteFillObject;
  }

  return false;
};

/**
 * 转换函数数组
 * @type {Array}
 */
export default [
  parseMargin,
  parsePadding,
  parseBorderRadius,
  parseBoxShadow,
  parseBorder,
  rpx2px,
  absoluteFill,
];
