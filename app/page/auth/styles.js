import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	launchView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	btnText: {
		marginTop: 20,
	},
	mobileView: {
		flexDirection: 'row',
		// alignItems: 'center',
		height: 50,
	},
	mobileInput: {
		width: 160,
		height: 40,
		marginBottom: 10,
		borderColor: '#ddd',
		borderWidth: 1,
	}
});