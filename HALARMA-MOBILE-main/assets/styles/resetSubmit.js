
import { StyleSheet, Dimensions } from 'react-native';

// Get the screen's width and height
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5', // Light grey background
    alignItems: 'center',
    paddingHorizontal: 20,
  
    
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
 
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:  175,
    left: 70,
      // 18% of screen width to position the logo
  },
  logo: {
    width: width * 0.5, // 50% of screen width
    height: height * 0.2, // 20% of screen height
    resizeMode: 'contain',
    position: 'absolute',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  formContainer: {
    width: '100%',
    marginBottom: 260,
    
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  submitButton: {
    backgroundColor: '#8B0000', // Dark red color for the button
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
