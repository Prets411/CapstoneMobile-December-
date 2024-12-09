import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const buttonStyles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    position: 'relative',
    marginTop: 20,
  },
 
  button: {
    backgroundColor: '#8B0000',
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.15,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: width * 0.045,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  Size: 16,
  },
});

export default buttonStyles;
