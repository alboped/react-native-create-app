import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import '~/utils/globalUtils';
// import dva from './utils/dva';
// import models from './models';
// import Navigator from './navigator';
// import persistConf from './config/persist.conf';
// import { persistEnhancer } from './utils/persist';

import Example from './pages/componsnts-example';
import ButtonExample from './pages/componsnts-example/button/ButtonExample';
import ButtonGroupExample from './pages/componsnts-example/button-group/ButtonGroupExample';

// const app = dva({
// 	initialState: {},
// 	models,
// 	extraEnhancers: [persistEnhancer(persistConf)],
// });

// export default app.start(<Navigator/>);

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Example">
				<Stack.Screen name="Example" component={Example} options={{ title: '示例' }}/>
				<Stack.Screen name="ButtonExample" component={ButtonExample} options={{ title: 'Button 按钮' }}/>
				<Stack.Screen name="ButtonGroupExample" component={ButtonGroupExample} options={{ title: '按钮组' }}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}