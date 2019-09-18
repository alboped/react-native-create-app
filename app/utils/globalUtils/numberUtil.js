/**
 * 数字处理全局工具方法
 */

/* 判断是否为数字 */
Number.isNumber = arg => /^(\-|\+)?\d+(\.\d+)?$/.test(arg);
