import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

import Home from '@src/pages/example';
import MinePage from '@src/pages/mine/MinePage';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return <Icon name="rowing" color={color} size={size} />;
        },
      })}
    >
      <Tab.Screen name="首页" component={Home} />
      <Tab.Screen name="我的" component={MinePage} />
    </Tab.Navigator>
  );
}
