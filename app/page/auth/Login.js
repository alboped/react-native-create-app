import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

@connect(state => ({app: state.app}))
export default class Login extends Component {
	static navigationOptions = {
		title: '登录'
	}

	state = {
		inputValue: '',
	}

	onChangeText = value => {
		this.setState({
			inputValue: value
		});
	}

	login = () => {
		this.props.dispatch({
			type: 'app/login',
			payload: {
				mobile: this.state.inputValue,
			}
		});
	}

	render() {
		return (
			<View style={styles.launchView}>
				<View style={styles.mobileView}>
					<Text>手机号：</Text>
					<TextInput
						style={styles.mobileInput}
						maxLength={11}
						onChangeText={this.onChangeText}
						autoFocus
						clearButtonMode="while-editing"
						keyboardType="phone-pad"
					/>
				</View>
				<Text onPress={this.login}>点击登录</Text>
			</View>
		);
	}
}