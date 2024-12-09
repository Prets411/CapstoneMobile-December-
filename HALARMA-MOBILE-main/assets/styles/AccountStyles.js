import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: height * 0.05,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: height * 0.01,
  },
  imageWrapper: {
    position: 'relative',
    width: width * 0.35,
    height: width * 0.35,
    borderRadius: (width * 0.35) / 2,
    overflow: 'hidden',
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    
  },
  placeholderImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
  },
  placeholderText: {
    color: '#777',
    fontSize: 14,
  },
  
  cameraIconContainer: {
    position: 'absolute',
    //bottom: 5, 
    //right: 5, 
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  cameraIcon: {
    color: '#8B0000',
  },
  divider: {
    width: '80%',
    height: 1,
    backgroundColor: '#b22a2a',
    marginVertical: height * 0.01,
  },
  formContainer: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: width * 0.03,
    paddingBottom: height * 0.04, // Add padding at the bottom for the submit button
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    //color: '#000',
    marginBottom: height * 0.01,
    textAlign: 'center',
  },
  input: {
    height: 55,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: width * 0.03,
    marginBottom: height * 0.01,
    backgroundColor: '#f9f9f9',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  
  },
  smallInput: {
    width: '48%',
  },
  submitButton: {
    backgroundColor: '#8B0000',
    paddingVertical: height * 0.015,
    borderRadius: 25,
    alignItems: 'center',
    width: '60%',
    alignSelf: 'center',
    marginTop: height * 0.03,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: width * 0.045,
  },
  backButton: {
      position: 'absolute',
      top: 20,
      left: 20, 
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalCard: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#ccc',
  },
  confirmButton: {
    backgroundColor: '#8B0000',
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  
});

export default styles;
