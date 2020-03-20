import AsyncStorage from '@react-native-community/async-storage';

export default {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'app'
  ]
};
