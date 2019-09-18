/**
 * 屏幕适配工具类
 */

import {Dimensions, StyleSheet} from 'react-native';

/* 设备宽度 */
export const deviceWidth = Dimensions.get('window').width;

/* 设备高度 */
export const deviceHeight = Dimensions.get('window').height;

const BASE_WIDTH = 750;

/**
 * 根据基准宽度计算实际像素
 * @param  {Number} width 设计像素
 * @return {Number}       实际像素
 */
export const rpx = width => {
  if (width === 1) {
    return StyleSheet.hairlineWidth;
  }

  return Math.floor((deviceWidth / BASE_WIDTH) * width);
};
