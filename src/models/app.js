export default {
  namespace: 'app',
  state: {
    isLaunch: false, // 是否启动
    isAuth: false, // 是否登录
  },
  reducers: {
    launch(state) {
      return { ...state, isLaunch: true };
    },
    login(state, { payload }) {
      return { ...state, isAuth: payload };
    },
  },
  effects: {},
};
