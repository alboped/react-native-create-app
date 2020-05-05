import AsyncStorage from '@react-native-community/async-storage';

/**
 * redux-persist 配置信息；
 */
export default {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    // 缓存白名单
    // 'app',
  ],
};
