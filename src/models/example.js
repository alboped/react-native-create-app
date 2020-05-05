import fetch from '@utils/fetch';
import { API } from '@config';

export default {
  namespace: 'example',
  state: {
    count: 0,
    listExample: [],
  },
  reducers: {
    updateState(state, { payload }) {
      console.log(1);
      return { ...state, ...payload };
    },
    setList(state, action) {
      console.log(2);
      return {
        ...state,
        listExample: action.payload,
      };
    },
  },
  effects: {
    *getList(action, { put }) {
      const res = yield fetch.get(API.LIST);

      yield put({
        type: 'setList',
        payload: res.namelist,
      });
    },
  },
};
