import fetch from '@utils/fetch';
import { API } from '@config';
console.log(API);

export default {
  namespace: 'app',
  state: {
    count: 0,
    list: [],
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload };
    },
    setList(state, action) {
      return {
        ...state,
        dataSource: action.payload,
      }
    }
  },
  effects: {
    *getList(action, { put }) {
      const res = yield fetch.get(API);
      yield put({
        type: 'setList',
        payload: res.list,
      });
    }
  },
}
