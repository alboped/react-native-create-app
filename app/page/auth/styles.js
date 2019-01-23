import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	launchView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	mobileView: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 20,
	},
	mobileInput: {
		width: 160,
		height: 30,
		borderColor: '#ddd',
		borderBottomWidth: 1,
	}
});
