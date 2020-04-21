import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '@src/pages/componsnts-example';
import MinePage from '@src/pages/mine/MinePage';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="首页" component={Home} />
      <Tab.Screen name="我的" component={MinePage} />
    </Tab.Navigator>
  );
}
