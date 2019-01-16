import axios from 'axios';
import hoistNonReactStatic from 'hoist-non-react-statics';

/**
 * navigation 页面事件高阶组件
 */
export default (options = {}) => WrappedComponent => {
	class EnhancedComponent extends Component {
		constructor(props) {
			super(props);

			this.coreProps = {
				toast: {},
				axios,
			}
		}

		render() {
			return (
				<WrappedComponent
					{...this.props}
					{...this.coreProps}
				/>
			);
		}
	}

	if(options.redux) {
		EnhancedComponent = connect(options.redux)(EnhancedComponent);
	}

	hoistNonReactStatic(EnhancedComponent, WrappedComponent);
	return EnhancedComponent;
}

