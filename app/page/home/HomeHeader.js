import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { connect } from '../../utils/decorator';

@connect()
export default class HomeHeader extends Component {
	testFun() {
		console.log('---');
	}

	render() {
		return (
			<View></View>
		);
	}
}