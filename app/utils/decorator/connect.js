import React, { Component } from 'react';
import { connect } from 'react-redux';

import hoistNonReactStatic from 'hoist-non-react-statics';

/**
 * 包装 connect 高阶组件
 */
export default (mapStateToProps, ...args) => WrappedComponent => {
	class Comp extends Component {
		/**
		 * 包装dispatch方法
		 * @param  {String} type    actionType
		 * @param  {any} payload    payload 数据
		 * @return {undefined}
		 */
		dispatchAction = (type, payload) => {
			this.props.dispatch({
				type,
				payload
			});
		}

		render() {
			return (
				<WrappedComponent
					dispatchAction={this.dispatchAction}
					{...this.props}
				/>
			);
		}
	}

	let stateFun = mapStateToProps;

	if(mapStateToProps instanceof Array) {
		stateFun = state => {
			const stateMap = {};
			mapStateToProps.forEach(item => {
				stateMap[item] = state[item]
			});

			return stateMap;
		}
	}

	const EnhancedComponent = connect(stateFun, ...args)(Comp);

	hoistNonReactStatic(EnhancedComponent, WrappedComponent);
	return EnhancedComponent;
}