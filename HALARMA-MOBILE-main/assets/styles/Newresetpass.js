import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5', // Light grey background
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row', // Align items in a row
    alignItems: 'center',
    alignSelf: 'stretch',
    marginTop: 20,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  backButton: {
    marginRight: 10, // Space between back button and logo
  },
  backButtonText: {
    fontSize: 20,
    color: 'black',
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  formContainer: {
    width: '100%',
    marginBottom: 20,
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
