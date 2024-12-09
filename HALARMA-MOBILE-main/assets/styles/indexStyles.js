import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  fullScreenWrapper: {
    position: 'absolute',
    width: width * 5.9, // Make the width larger than the screen for smooth horizontal movement
    height: 900,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  

  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Fills the entire background image
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent gray color
  },
  overlayContent: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
    zIndex: 1, // Ensure the content overlays the animated background
  },
  logoContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.05,
  },
  bellImage: {
    width: width * 0.8,
    height: height * 0.15,
    marginBottom: height * 0.02,
  },
  textContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
  },
  description: {
    flex: 3,
    fontSize: width * 0.04,
    textAlign: 'justify',
    color: '#fff',
    lineHeight: width * 0.06,
    marginHorizontal: width * 0.01,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: height * 0.1,
  },
  button: {
    backgroundColor: '#8B0000',
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.25,
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
  },
});

export default styles;
