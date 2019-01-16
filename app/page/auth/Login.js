import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Login extends Component {
	static navigationOptions = {
		title: '登录'
	}

	render() {
		return (
			<View>
				<Text>登录</Text>
			</View>
		);
	}
}