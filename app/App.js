import 'react-native-gesture-handler';
import React from 'react';

import '@app/utils/globalUtils';
import dva from './utils/dva';
import models from './models';
import Navigator from './navigator';
import persistConf from './config/persist.conf';
import { persistEnhancer } from './utils/persist';

const app = dva({
	initialState: {},
	models,
	extraEnhancers: [persistEnhancer(persistConf)],
});

export default app.start(<Navigator/>);