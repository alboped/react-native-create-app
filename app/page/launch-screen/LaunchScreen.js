import React, { Component } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

@connect(state => ({
	app: state.app
}))
class LaunchScreen extends Component {
	static navigationOptions = {
		header: null
	}

	state = {
		time: 3,
	}

	componentDidMount() {
		// this.props.dispatch({
		// 	type: 'app/setToken',
		// 	payload: '0a98dfa9sdtfa89sdtf80ast9df98',
		// });
		this.countdown();
	}

	componentWillUnmount() {
		this.timer && clearTimeout(this.timer);
	}

	/**
	 * 倒计时
	 * @return {undefined}
	 */
	countdown = () => {
		const { time } = this.state;

		if(time < 0) return this.skip();

		this.timer = setTimeout(() => {
			this.setState({
				time: time - 1
			}, this.countdown);
		}, 1000);
	}

	/**
	 * 跳过启动页面
	 * @return {undefined}
	 */
	skip = () => {
		this.props.navigation.navigate('AuthStack');
	}

	render() {
		const { time } = this.state;

		return (
			<View style={styles.launchView}>
				<ActivityIndicator/>
				<Text onPress={this.skip} style={styles.btnText}>点击跳过 {time}</Text>
			</View>
		);
	}
}

export default {
	screen: LaunchScreen,
}