// app/assets/styles/ProgramsStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#F0F0F0', // Light grey background
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
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 10,
  },
  scrollContainer: {
    paddingTop: 60, // Adjust based on your title height to avoid overlap
  },
  card: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardTime: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10, // Add spacing after the image
  },
  linkContainer: {
    marginTop: 10, // Spacing between image and link if needed
  },
  cardLink: {
    color: '#1e90ff', // Blue color for hyperlink appearance
    textDecorationLine: 'underline', // Underline for link appearance
    fontSize: 16,
    textAlign: 'left',
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
  separator: {
    alignSelf: 'center', // Center the separator horizontally
    height: 1,
    backgroundColor: '#ccc', // Softer color for a more subtle effect
    width: '90%', // Slightly wider for better coverage
    marginVertical: 10, // Added vertical margin for spacing
  },
});

export default styles;
