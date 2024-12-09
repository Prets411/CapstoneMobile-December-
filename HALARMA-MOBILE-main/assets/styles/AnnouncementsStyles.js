import { StyleSheet } from 'react-native';

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
  subtitle: {
    fontSize: 14,
    color: '#555',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    width: '80%',
    marginTop: 5,
  },

  // Announcement container
  announcementContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  announcementItem: {
    marginBottom: 20,
  },
  announcementOffice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  announcementTime: {
    fontSize: 12,
    color: '#555',
    marginBottom: 5,
  },
  announcementText: {
    fontSize: 14,
    color: '#000',
    marginBottom: 10,
  },
  announcementImage: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 10, // Space below the image
  },
  // Card style for each announcement
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  // Link style for clickable forms URL
  linkContainer: {
    marginTop: 10,
  },
  announcementLink: {
    fontSize: 12,
    color: '#3498db', // Blue color for hyperlink appearance
    textDecorationLine: 'underline', // Underline for hyperlink appearance
    marginBottom: 10,
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
  announcementLink: {
    fontSize: 12,
    color: '#3498db', // Blue color to resemble a hyperlink
    textDecorationLine: 'underline', // Underline for hyperlink appearance
    marginBottom: 10,
  },
  
});

export default styles;
