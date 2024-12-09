import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    paddingHorizontal: 25,
    paddingVertical: 30,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center', // Center vertically in the container
    marginTop: height * -0.07, // Add 5% of screen height as top margin
    //marginBottom: height * 0.01, // Add 2% of screen height as bottom margin
  },
  logo: {
    width: width * 0.5, // 50% of screen width
    height: height * 0.2, // 20% of screen height
    resizeMode: 'contain', // Ensure the image scales without distortion
  },
  
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginBottom: 10,
  },
  subbHeaderText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#000',
    marginBottom: 15, // Adjusted for more balanced spacing
  },
  subHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#800000',
    marginBottom: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  textArea: {
    width: '100%',
    height: 100,
    borderColor: '#800000',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#FFF',
    textAlignVertical: 'top',
    marginBottom: 10,
  },
  exampleText: {
    fontSize: 12,
    color: '#800000',
    marginBottom: 20,
  },
  imageUploadContainer: {
    borderColor: '#800000',
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    backgroundColor: '#FFF',
    marginBottom: 20,
  },
  imageButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  imageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#800000',
    padding: 10,
    borderRadius: 8,
    width: '45%',
    justifyContent: 'center',
  },
  imageButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  uploadedImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    resizeMode: 'contain',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  backButton: {
    backgroundColor: '#800000',
    paddingVertical: 15,
    borderRadius: 25,
    width: '45%',
    alignItems: 'center',
  },
  nextButton: {
    backgroundColor: '#800000',
    paddingVertical: 15,
    borderRadius: 25,
    width: '45%',
    alignItems: 'center',
    
    
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    
  },


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


  uploadedImage: {
    width: '100%',
    height: 198,
    borderRadius: 7,
    resizeMode: 'cover',
    marginTop: 0,
  },


  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '80%',
    justifyContent: 'center',
  },
  modalButtonText: {
    color: '#FFF',
    fontSize: 16,
    marginLeft: 10,
  },
  modalCloseButton: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    width: '80%',
    alignItems: 'center',
  },
  modalCloseButtonText: {
    color: '#FFF',
    fontSize: 16,
  },

  deleteImageButton: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#FF3333',
  padding: 10,
  borderRadius: 5,
  marginTop: 10,
  justifyContent: 'center',
},
deleteImageButtonText: {
  color: '#FFF',
  fontSize: 16,
  marginLeft: 10,
},
scrollContainer: {
  paddingBottom: 100, // Ensure content doesn't get hidden behind the bottom nav
},

  
});

export default styles;
