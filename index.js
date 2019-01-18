import { AppRegistry, YellowBox } from 'react-native';
import App from './app/App';

AppRegistry.registerComponent('rnc_app', () => App);

YellowBox.ignoreWarnings([
	'Warning: ',
	'Remote debugger ',
	'Module RCTImageLoader',
]);