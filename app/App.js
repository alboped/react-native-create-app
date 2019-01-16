import React from 'react';
import { AppRegistry } from 'react-native';
import { persistStore } from 'redux-persist';

import dva from './utils/dva';
import Router, { routerMiddleware, routerReducer } from './AppNavigator';
import appModel from './models/app';

const app = dva({
	initialState: {},
	models: [appModel],
	extraReducers: { router: routerReducer },
	onAction: [routerMiddleware],
	onError(e) {
		console.log('onError', e)
	},
});

export default app.start(<Router />);
