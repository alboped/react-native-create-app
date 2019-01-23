/**
 * 延迟执行
 * @param  {Number} time 延迟时间（毫秒）
 * @return {Promise}     promise 对象
 */
export const delay = time => new Promise(resolve => setTimeout(resolve, time));

export const createAction = type => payload => ({ type, payload });

/**
 * 公用工具方法
 */

/**
 * 生成唯一uuid
 * @return {String} uuid
 */
export const guid = () => {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
		var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
		return v.toString(16);
	});
};

/**
 * 检测对象是否为空对象（即 {}）
 * @param  {Object} object 待检测的对象
 * @return {Boolean}        是否有属性
 */
export const isEmptyObject = object => {
	const keys = Object.keys(object);

	return keys.length === 0;
};

/**
 * 解析json字符串
 * @param  {String} jsonStr json字符串
 * @return {Object}         json对象
 */
export const parseJson = (jsonStr, defaultValue = {}) => {
	let json = defaultValue;
	try {
		json = JSON.parse(jsonStr);
	} catch(e) {
		json = defaultValue;
	}
	return json;
};

/**
 * 格式化url参数
 * @param  {String} url    url
 * @param  {Object} params 参数对象
 * @return {String}        带参数的url
 */
export const parseUrl = (url, params = {}) => {
	const paramArr = Object.keys(params).map(key => `${key}=${params[key]}&`);
	const paramStr = paramArr.join('').slice(0, -1);

	return `${url}${paramStr && `?${paramStr}`}`;
};

/**
 * 取指定范围之间的数字
 * @param  {Number} min    范围最小值
 * @param  {Number} max    范围最大值
 * @param  {Number} number 数字
 * @return {Number}        取之后的数字
 */
export const betweenNumber = (min, max, number) => {
	return Math.max(Math.min(max, number), min);
};

/**
 * 生成指定长度的数组
 * @param  {number} length 数组长度
 * @param {any} fill       填充元素
 * @return {array}		  生成的数组
 */
export const arrayFill = (length, fill) => {
	return new Array(length).fill(fill);
};

/**
 * 校验是否含有空格
 * @param  {String} message 字符串
 * @return {Boolean}        是否有空格
 */
export const checkSpace = message => {
    return {
        pattern: /^[^ ]+$/,
        message
    };
};

/**
 * 校验字符串是否是url
 * @param  {String} str 字符串
 * @return {Boolean}    是否是url
 */
export const checkUrl = str => {
    const RegUrl = new RegExp();
    RegUrl.compile("(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]");
    return RegUrl.test(str);
};
