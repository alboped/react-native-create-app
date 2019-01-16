import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class LaunchScreen extends Component {
	static navigationOptions = {
		header: null
	}

	render() {
		return (
			<View>
				<Text>启动</Text>
			</View>
		);
	}
}