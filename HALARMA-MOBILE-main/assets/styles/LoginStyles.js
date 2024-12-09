import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E1E0', // Light gray background
    paddingHorizontal: 20,
    paddingTop: height * 0.05, // Add space at the top
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 53, // Space between the logo and the form
  },
  logo: {
    width: width * 0.5, // 50% of screen width
    height: height * 0.2, // 20% of screen height
    resizeMode: 'contain',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 14,
    color: '#990000', // Dark red color
    textAlign: 'center',
    marginBottom: 25,
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    height: 45,
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
  },
  loginButton: {
    backgroundColor: '#990000', // Dark red color for the button
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    width: '90%',
    marginTop: 15,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerLinks: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#333',
    marginBottom: 10,
  },
  link: {
    color: '#990000', // Dark red color for the links
    marginTop: 5,
    fontWeight: 'bold',
  },
});

export default LoginStyles;
