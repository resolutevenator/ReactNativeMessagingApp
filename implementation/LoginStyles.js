import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	logo: {
		width: 150,
		height: 150,
		borderWidth: 100,
		marginBottom: 80,
	},
	input: {
		height: 40, 
		borderColor: 'gray',
		borderBottomWidth: 1, 
		width: Dimensions.get('window').width - 20,
		marginBottom: 10,
		marginLeft: 10
	},
	buttonContainer: { 
		width: Dimensions.get('window').width - 20,
		marginLeft: 10
	},
});
    
export default styles;