// PasswordResetStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5', // Light grey background
    alignItems: 'center', // Centers the children horizontally
    justifyContent: 'center', // Centers the children vertically
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20, // Fixing the back button position
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 171, // Center the logo inside its container
  },
  logo: {
    left: 70,
    width: 202,
    height: 121,
   
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 50,
    textAlign: 'center', // Center the title text
  },
  formContainer: {
    width: '100%',
    alignItems: 'center', // Center the form container
    marginBottom: 250, // Adjust this for spacing
  },
  input: {
    width: '100%', // Make input width responsive
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom:26,
    backgroundColor: '#fff',
  },
  submitButton: {
    backgroundColor: '#8B0000', // Dark red color for the button
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    width: '100%', // Match the width of the input
    marginBottom: 280,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footerLinks: {
    alignItems: 'center',
    marginBottom: 90,
  },
  footerText: {
    fontSize: 14,
    color: 'black',
    marginBottom: 20,
  },
  link: {
    fontSize: 14,
    color: '#b22a2a', // Dark red color for the links
    textDecorationLine: 'underline',
    marginBottom: 5,
  },
  footerSubText: {
    fontSize: 12,
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default styles;
