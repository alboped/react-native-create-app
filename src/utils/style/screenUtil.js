/**
 * 屏幕适配工具类
 */

import { Dimensions, StyleSheet } from 'react-native';

/* 设备宽度 */
export const deviceWidth = Dimensions.get('window').width;

/* 设备高度 */
export const deviceHeight = Dimensions.get('window').height;

/*
 * 屏幕基准宽度
 */
let BASE_WIDTH = 750;

/**
 * 设置屏幕基准宽度
 * @param  {Number} width 宽度
 * @return {undefined}
 */
export const setBaseWidth = width => {
  BASE_WIDTH = width;
};

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

/**
 * 将高度转换为vh单位
 * @param  {Number} height 高度
 * @return {Number}    vh 高度
 */
export const vh = height => {
  return Math.floor((deviceHeight / 100) * height);
};
