export default {
	namespace: 'app',
	state: {
		token: null,
	},
	reducers: {
		saveUserInfo(state, { payload }) {
			return {
				...state,
				token: payload,
			}
		},
	},
	effects: {
		*login({ payload }, { call, put }) {
			put({
				type: 'saveUserInfo',
				payload
			});
		},
	},
	subscriptions: {}
}