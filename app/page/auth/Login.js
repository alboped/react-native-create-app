import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';
import Navigation from '../../utils/navigation';
import { connect } from '../../utils/decorator';

@connect(state => ({app: state.app}))
export default class Login extends Component {
	static navigationOptions = {
		title: '登录'
	}

	state = {
		inputValue: '',
	}

	componentDidMount() {
		const { app } = this.props;

		this.setState({
			inputValue: app.mobile,
		});
	}

	onChangeText = value => {
		this.setState({
			inputValue: value
		});
	}

	login = () => {
		this.props.dispatchAction('app/login', {
			mobile: this.state.inputValue,
		});

		Navigation.push('AppStack');
	}

	render() {
		const { app } = this.props;

		return (
			<View style={styles.launchView}>
				<View style={styles.mobileView}>
					<Text>手机号：</Text>
					<TextInput
						style={styles.mobileInput}
						defaultValue={app.mobile}
						maxLength={11}
						onChangeText={this.onChangeText}
						autoFocus
						clearButtonMode="while-editing"
						keyboardType="phone-pad"
						underlineColorAndroid="transparent"
					/>
				</View>
				<Text onPress={this.login}>点击登录</Text>
			</View>
		);
	}
}