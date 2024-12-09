import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 40,
  },

  
  imageWrapper: {
    alignItems: 'center',
  },
  profileImage: {
    width: width * 0.35,
    height: width * 0.35,
    borderRadius: width * 0.175,
    marginBottom: 20,
  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    padding: 5,
  },
  cameraIcon: {
    color: '#fff',
  },
  divider: {
    marginVertical: 20,
    height: 1,
    backgroundColor: '#ddd',
  },
  formContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 12,
    marginBottom: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  pickerSelectStyle: {
    inputAndroid: {
      backgroundColor: '#fff',
      padding: 12,
      borderRadius: 5,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#ddd',
      fontSize: 16,
    },
    inputIOS: {
      backgroundColor: '#fff',
      padding: 12,
      borderRadius: 5,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#ddd',
      fontSize: 16,
    },
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  smallInput: {
    width: '48%',
  },
  submitButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 30,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: width * 0.8,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 5,
    marginBottom: 10,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default styles;
