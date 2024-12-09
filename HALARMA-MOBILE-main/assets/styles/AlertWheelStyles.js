import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  legendContainer: {
    paddingHorizontal: 20,
    paddingBottom: 70,
    
  },
  alertItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 1,
    padding: 15,
    marginBottom: 15,
  },
  alertIcon: {
    marginRight: 15,
  },
  alertText: {
    flex: 1,
  },
  alertTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  alertDescription: {
    fontSize: 14,
    color: '#555',
    
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
  

   
  

  
    // Make sure it appears above other elements
  },
});

export default styles;
