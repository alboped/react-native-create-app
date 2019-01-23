import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { connect } from '../../utils/decorator/';

@connect(['app'])
export default class Home extends Component {
	static navigationOptions = {
		title: '首页'
	}

	render() {
		return (
			<View>
				<Text>首页</Text>
			</View>
		);
	}
}