import { StyleSheet, Dimensions } from 'react-native';

// Get the screen's width and height
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E1E0',
    paddingHorizontal: width * 0.05, // 5% of screen width for padding
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,},

  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
        // 15% of screen height for bottom margin
 
      },
  logo: {
    width: width * 0.5, // 50% of screen width
    height: height * 0.2, // 20% of screen height
    resizeMode: 'contain',
    
    
  },
  title: {
    
      fontSize: width * 0.08, // 8% of screen width for font size
      fontWeight: 'bold',
      color: 'black',
      marginBottom: height * 0.02,// 2% of screen height for bottom margin
  },
  subtitle: {
    fontSize: width * 0.04, // 4% of screen width for font size
    color: '#8B0000',
    textAlign: 'center',
    marginBottom: height * 0.02, // 2% of screen height for bottom margin
    fontWeight: '600',
  },
  instructions: {
    fontSize: width * 0.035, // 3.5% of screen width for font size
    color: '#8B0000',
    textAlign: 'center',
    marginBottom: height * 0.03, // 3% of screen height for bottom margin
    fontWeight: '400',
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: height * 0.26, // 25% of screen height for bottom margin
  },
  input: {
    height: height * 0.06, // 6% of screen height for input height
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: height * 0.02, // 2% of screen height for bottom margin
    paddingHorizontal: width * 0.03, // 3% of screen width for padding
    borderRadius: 5,
    width: '90%',
  },
  loginButton: {
    backgroundColor: '#8B0000',
    paddingVertical: height * 0.02, // 2% of screen height for vertical padding
    alignItems: 'center',
    borderRadius: 25,
    width: '70%',
    marginVertical: height * 0.02, // 2% of screen height for vertical margin
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: width * 0.045, // 4.5% of screen width for font size
    fontWeight: 'bold',
  },
});

export default styles;
