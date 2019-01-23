export default {
	namespace: 'app',
	state: {
		mobile: '',
	},
	reducers: {
		saveUser: (state, { payload }) => ({ ...state, ...payload }),
	},
	effects: {
		*login({ payload }, { call, put }) {
			yield put({
				type: 'saveUser',
				payload
			});
		},
	},
	subscriptions: {}
}