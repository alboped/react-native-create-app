/**
 * 数字处理全局工具方法
 */

/* 判断是否为数字 */
Number.isNumber = arg => /^(\-|\+)?\d+(\.\d+)?$/.test(arg);

/**
 * 金额格式化（添加千分位）
 * @param  {Number|String} money   金额
 * @param  {Object} options 配置参数
 * @return {String}      格式化后的金额字符串
 */
Number.thousands = (money, options = {}) => {
	let isMinus = false;
	if(!money || isNaN(money)) {
		money = '0';
	}
	if(money < 0) {
		isMinus = true;
		money = Math.abs(money);
	}

	money = money.toString();

	const moneyArr = money.split('.');

	const intArr = moneyArr[0].split('');

	const intDivideArr = intArr.map((item, i) => {
		const index = intArr.length - i;

		if(index === intArr.length || index % 3 !== 0) {
			return item;
		} else {
			return `,${item}`;
		}
	});

	let decimalStr;

	if(!moneyArr[1]) {
		decimalStr = `00`;
	} else if(moneyArr[1].length === 1) {
		decimalStr = `${moneyArr[1]}0`;
	} else {
		decimalStr = moneyArr[1];
	}

	const sign = options.sign ? '+' : '';

	return `${isMinus ? '-' : sign}${intDivideArr.join('')}.${decimalStr}`;
}
