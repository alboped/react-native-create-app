import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();

const tabConf = {
  Home: {
    label: '首页',
    name: 'Home',
    component: require('@src/pages/example').default,
    iconName: 'autorenew',
  },
  Mine: {
    label: '我的',
    name: 'Mine',
    component: require('@src/pages/mine/MinePage').default,
    iconName: 'autorenew',
  },
};

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        const tabItem = tabConf[route.name];

        return {
          tabBarIcon: ({ color, size }) => {
            return <Icon name={tabItem.iconName} color={color} size={size} />;
          },
        };
      }}
    >
      {Object.keys(tabConf).map((key, index) => {
        const item = tabConf[key];
        return <Tab.Screen key={index} name={item.name} component={item.component} />;
      })}
    </Tab.Navigator>
  );
}
