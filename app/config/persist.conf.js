/**
 * redux-persist 相关配置信息
 */
import { AsyncStorage } from 'react-native';

/**
 * 需要持久化状态的白名单数组
 * @type {Array}
 */
export const whitelist = [
	'app',
];

export default {
	key: 'primary',
	storage: AsyncStorage,
	whitelist
};