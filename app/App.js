import React from 'react';

import '~/utils/globalUtils';
import dva from './utils/dva';
import models from './models';
import Navigator from './navigator';

const app = dva({
	initialState: {},
	models,
});

export default app.start(<Navigator/>);