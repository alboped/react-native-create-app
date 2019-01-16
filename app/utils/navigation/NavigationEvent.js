import React, { Component } from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';

/**
 * navigation 页面事件高阶组件
 */
export default (options = {}) => WrappedComponent => {
	class EnhancedComponent extends Component {
		eventList = []

		componentWillUnmount() {
			this.eventList.map(item => item && item.remove());
		}

		on = (...args) => {
			const { navigation } = this.props;
			if(navigation) {
				const eventHandle = navigation.addListener(...args);
				this.eventList.push(eventHandle);
				return eventHandle;
			}
		}

		getEventProps = () => {
			const { propName } = options;

			return {
				[propName || 'navEvent']: {
					on: this.on,
				}
			};
		}

		render() {
			return (
				<WrappedComponent
					{...this.getEventProps()}
					{...this.props}
				/>
			);
		}
	}

	hoistNonReactStatic(EnhancedComponent, WrappedComponent);
	return EnhancedComponent;
}