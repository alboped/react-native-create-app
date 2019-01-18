import React from 'react';
import { AppRegistry } from 'react-native';
import { REHYDRATE, PURGE, persistCombineReducers, persistStore } from 'redux-persist';

import dva from './utils/dva';
import Router, { routerMiddleware, reducers } from './AppNavigator';
import appModel from './models/app';
import persistConf from './config/persist.conf';

let reducer = persistCombineReducers(persistConf, reducers);

const app = dva({
	initialState: {},
	models: [appModel],
	extraReducers: { router: reducer },
	onAction: [routerMiddleware],
	onError(e) {
		console.log(e);
	},
});

persistStore(app.getStore(), null, (a) => {
	console.log(a);
});

export default app.start(<Router />);
