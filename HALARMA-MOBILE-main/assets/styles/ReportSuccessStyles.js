import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    alignItems: 'center', // Centers children horizontally
    justifyContent: 'center', // Centers children vertically
    paddingHorizontal: width * 0.05, // Responsive horizontal padding
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 193,
    left: 70, // 15% of screen height for bottom margin
  },
  logo: {
    width: width * 0.5, // 50% of screen width
    height: height * 0.2, // 20% of screen height
    resizeMode: 'contain',
  },
  successMessage: {
    fontSize: width * 0.045, // Responsive font size based on screen width
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: height * 0.10, // Reduce margin for better vertical spacing
    paddingHorizontal: 30,
    lineHeight: 21, // Add horizontal padding to center the text
  },
  reportButton: {
    backgroundColor: '#8B0000',
    paddingVertical: height * 0.02, // Responsive padding based on height
    paddingHorizontal: width * 0.2, // Responsive width for button
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: height * 0.02, 
    width: '80%',// Adjust margin spacing for uniformity
  },
  historyButton: {
    backgroundColor: '#8B0000',
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.2,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: height * 0.30,
     width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16, // Responsive font size
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: height * 0.1, // Adjust height for responsive bottom nav
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    position: 'absolute', // Stick to the bottom of the screen
    bottom: 0,
    left: 0, // Align with the edges of the screen
    right: 0, // Align with the edges of the screen
    zIndex: 10,
  },
  navItem: {
    alignItems: 'center',
    flex: 1,
  },
  navText: {
    fontSize: 12,
    color: '#333',
  },
  navIcon: {
    width: 28,
    height: 25,
    marginBottom: 5,
    textAlign: 'center',
  },
});

export default styles;
