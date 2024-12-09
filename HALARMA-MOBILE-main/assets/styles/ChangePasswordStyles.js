// ChangePasswordStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center',     // Center horizontally
    backgroundColor: '#F0F0F0', // Light grey background
    paddingHorizontal: 20,
   
  },
  // Back Button (positioned at the top-left corner)
  backButton: {
    position: 'absolute',
    top: 40,  // Distance from the top of the screen
    left: 20, // Distance from the left side
  },
  // Logo Section
  logoContainer: {
    alignItems: 'center',
     // Space below the logo
  },
  logo: {
    width: 250,
    height: 190,
    marginBottom: 90,
   
  },
  // Header Text
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  // Input Fields
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingLeft: 15,
    backgroundColor: '#fff',
  },
  // Save Button
  saveButton: {
    backgroundColor: '#800000',  // Dark red color for the button
    paddingVertical: 15,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
