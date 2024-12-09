import { StyleSheet, Dimensions } from 'react-native';

// Get the screen's width and height
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E1E0',
  },
  titleContainer: {
    alignItems: 'center',
    marginVertical: 45,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: '#333',
    width: '80%',
    marginTop: 5,
  },
  notificationContainer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  notificationIconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  notificationText: {
    flex: 1,
  },
  notificationMessage: {
    fontSize: 14,
    color: '#000',
  },
  notificationTime: {
    fontSize: 12,
    color: '#555',
    marginTop: 5,
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
  }
});

export default styles;
