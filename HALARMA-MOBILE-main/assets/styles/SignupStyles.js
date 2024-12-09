import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5', // Light gray background
    paddingHorizontal: width * 0.05, // 5% padding horizontally
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30, // Space between the logo and the form
  },
  logo: {
    width: width * 0.5, // 50% of screen width
    height: height * 0.2, // 20% of screen height
    resizeMode: 'contain',
  },
  title: {
    fontSize: width * 0.06, // 6% of screen width
    fontWeight: 'bold',
    color: '#000',
    marginBottom: height * 0.02, // 2% of screen height for bottom margin
    textAlign: 'center',
  },
  input: {
    height: height * 0.06, // 6% of screen height for input height
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: height * 0.02, // 2% of screen height for bottom margin
    paddingHorizontal: width * 0.04, // 4% of screen width for padding
    borderRadius: 8,
    width: '90%',
    backgroundColor: '#FFF',
  },
  signupButton: {
    backgroundColor: '#8B0000',
    paddingVertical: height * 0.015, // 1.5% of screen height for padding
    alignItems: 'center',
    borderRadius: 30,
    width: '80%',
    marginVertical: height * 0.02, // 2% of screen height for vertical margin
  },
  subtitle: {
    fontSize: width * 0.04, // 4% of screen width for font size
    color: '#8B0000',
    textAlign: 'center',
    marginBottom: height * 0.03, // 3% of screen height for bottom margin
    fontWeight: '600',
  },

  signupButtonText: {
    color: '#FFF',
    fontSize: width * 0.045, // 4.5% of screen width
    fontWeight: 'bold',
  },
  footerLinks: {
    alignItems: 'center',
    marginTop: height * 0.01, // 1% of screen height for top margin
  },
  footerText: {
    fontSize: width * 0.035, // 3.5% of screen width
    color: '#000',
    marginBottom: height * 0.005, // 0.5% of screen height for bottom margin
  },
  link: {
    color: '#0000FF',
    textDecorationLine: 'underline',
    fontSize: width * 0.035, // 3.5% of screen width
  },
});

export default styles;
