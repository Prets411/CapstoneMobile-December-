import { StyleSheet,  Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5', // Light grey background for the screen
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  // Logo Section
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 45,
    left: 70, // 15% of screen height for bottom margin
  },
  logo: {
    width: width * 0.5, // 50% of screen width
    height: height * 0.2, // 20% of screen height
    resizeMode: 'contain',
  },
  // Event Image
  eventImage: {
    width: '90%',
    height: 180,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 10,
    borderColor: '#800000', // Red border for the image
    borderWidth: 1,
  },
  // Event Title
  eventTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
   
    color: '#800000', // Red color for the title
  },
  // Event Description
  eventDescriptionContainer: {
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
  eventDescription: {
    fontSize: 14,
    color: '#333', // Dark grey color for the description
    textAlign: 'justify',
    lineHeight: 22,
  },
 // Bottom Navigation
 bottomNav: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  height: 80,
  borderTopWidth: 1,
  borderColor: '#ccc',
  backgroundColor: '#fff',
  left: 0,                             // Align it to the left (no gap on the left side)
  right: 0,                            // Align it to the right (no gap on the right side)  // Elevation for Android to create depth
  zIndex: 10,   
  position: 'absolute',                // Stick to the bottom of the screen
  bottom: 0,   
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
separator: {
  height: 1,
  backgroundColor: '#333',
  width: '90%',
  marginTop: 10,
  alignSelf: 'center',
  marginBottom: 20,
  
  
}
});

export default styles;
