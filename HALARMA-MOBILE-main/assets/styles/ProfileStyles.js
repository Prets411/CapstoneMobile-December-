import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#E5E5E5',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  imageWrapper: {
    position: 'relative',
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: (width * 0.4) / 2,
    overflow: 'hidden',
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    //marginBottom: 10,
    
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: 70,

    backgroundColor: '#fff', // White background for better contrast
    padding: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0', // Subtle border for better integration
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  
  profileHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
   // marginBottom: 20,
    position: 'relative',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  editIcon: {
    marginLeft: 8, // Spacing to the left of the edit icon
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 20,
  //  marginBottom: 20,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#800000',
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  reportLink: {
    marginTop: 10,
    alignItems: 'center',
  },
  reportLinkText: {
    color: '#1E90FF',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
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

////