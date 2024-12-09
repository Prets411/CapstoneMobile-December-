// SettingsStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#F0F0F0',  // Light grey background like the image
  },
  // Logo Section
  logoContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    width: 190,
    height: 130,  // Adjust size to match the proportions in the image
    
  },
  // Header Text (Settings)
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  // Settings List
  settingsList: {
    paddingHorizontal: 20,
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  settingsIcon: {
    marginRight: 15,
  },
  settingsText: {
    fontSize: 16,
    flex: 1,
    color: '#800000',  // Deep red color for text
  },
  // Button Section
  buttonContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  logoutButton: {
    backgroundColor: '#800000',  // Red color for the button
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 10,
    alignItems: 'center',
  },
  signOutButton: {
    backgroundColor: '#800000',  // Red color for the button
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
 // Bottom Navigation Section
 bottomNav: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  height: 80,
  borderTopWidth: 1,
  borderColor: '#ccc',
  backgroundColor: '#fff',
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
