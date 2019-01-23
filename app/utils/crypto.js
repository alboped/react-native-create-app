/**
 * 数据加解密工具方法
 */
import { AES, enc } from 'crypto-js';

import { parseJson } from './CommonUtil';

/**
 * 加密key
 * @type {Object}
 */
const AES_KEY = {
	storage: enc.Utf8.parse('xlm_storage').toString(),
};

export default {
	/**
	 * 加密
	 * @param  {any} value  	 需要加密的数据
	 * @param  {String} keyType  加密key类型，默认为本地存储
	 * @return {String}          加密后的字符串
	 */
	en(value, keyType = 'storage') {
		let val = value;
		if(val && typeof val === 'object') {
			val = JSON.stringify(val);
		}
		return AES.encrypt(val, AES_KEY[keyType]).toString();
	},
	/**
	 * 解密
	 * @param  {String} value    加密字符串
	 * @param  {String} keyType  加密key类型，默认为本地存储
	 * @return {any}             解密后的数据
	 */
	de(value, keyType = 'storage') {
		const bytes = AES.decrypt(value, AES_KEY[keyType]).toString(enc.Utf8);
		if(bytes) return parseJson(bytes, bytes);
		return value;
	}
};