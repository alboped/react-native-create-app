import 'react-native-gesture-handler';
import React from 'react';

import '@utils/global';
import dva from '@utils/dva';
import { persistEnhancer } from '@utils/persist';
import { persistConf } from '@config';
import models from './models';
import Navigator from './navigator';

const app = dva({
  initialState: {},
  models,
  extraEnhancers: [persistEnhancer(persistConf)],
  onError: err => {
    console.log(err);
  },
});

export default app.start(<Navigator />);
