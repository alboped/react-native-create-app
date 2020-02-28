export default {
  namespace: 'app',
  state: {
    count: 0,
  },
  reducers: {
    updateState(state, { payload }) {
      console.log(state, payload);
      return { ...state, ...payload }
    },
  },
  effects: {
  },
  subscriptions: {
  },
}
