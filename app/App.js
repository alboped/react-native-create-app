import React from 'react';
import { persistStore } from 'redux-persist';
import dvaImmer from 'dva-immer';

import dva from './utils/dva';
import { createReducers, routerMiddleware } from './utils/redux';
import Router, { AppNavigator } from './navigator/';
import models from './models/';
import persistConf from './config/persist.conf';
import { persistEnhancer } from './utils/persist';

const app = dva({
	initialState: {},
	models: models,
	extraReducers: { router: createReducers(AppNavigator) },
	extraEnhancers: [persistEnhancer(persistConf)],
	onAction: [routerMiddleware],
	onError(e) {
		console.log(e);
	},
});

/* dva使用immutable */
app.use(dvaImmer());

persistStore(app.getStore(), null, () => {});

export default app.start(<Router/>);
