// HistoryStyles.js
import { StyleSheet, Dimensions } from 'react-native';

// Get the screen's width and height
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',

    color: '#8B0000',
    alignItems: 'center',
    marginVertical: 45,
    marginBottom: 10,
  },
  historyContainer: {
    paddingHorizontal: 20,
  },
  incidentCard: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
  },
  incidentText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  statusOpen: {
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
  },
  statusInProgress: {
    fontSize: 16,
    color: 'orange',
    fontWeight: 'bold',
  },
  statusResolved: {
    fontSize: 16,
    color: 'blue',
    fontWeight: 'bold',
  },
  reportButton: {
    backgroundColor: '#8B0000',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginHorizontal: 50,
    marginVertical: 20,
  },
  reportButtonText: {
    color: '#fff',
    fontSize: 18,
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
