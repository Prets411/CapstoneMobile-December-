import { StyleSheet, Dimensions } from 'react-native';

// Get the screen's width and height
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',

    backgroundColor: '#E5E5E5',
  },
  // Logo Section
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
   

   
  },
  logo: {
    width: 200,
    height:120,
    
  // Ensure proper scaling of the logo
  },
  // Grid Section
  gridContainer: {
    //borderWidth: 2, // Reduced to 2px for a subtler border
  //  borderColor: 'black',
   // Vertical padding for each icon
   // borderWidth: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: width * 0.01, // 5% of screen width for padding
    alignSelf: 'center',
    width: '80%', // Keep the width responsive
    // 2% of screen height for top margin

    
  
    

  },
  gridItem: {
    width: '45%', // Ensures 2 columns
    aspectRatio: 1, // Keeps the grid items square
    alignItems: 'center',
    justifyContent: 'center',
    padding: width * 0.02, // 3% of screen width for padding
// 1px border for clarity
    borderColor: '#ccc',
    borderRadius: 8,
    
    
  },
  icon: {
    width: '80%', // Make it relative to the container size so it scales
    height: '100%', // Maintain aspect ratio
    resizeMode: 'contain', // Ensure the icon scales properly
// 1% of screen height for bottom margin

    
  },
  iconLabel: {
    fontSize: width * 0.035, // Responsive font size based on screen width (3.5%)
    textAlign: 'center',     // Centers the text under the icon
    marginTop: height * 0.00, // Add a small margin at the top for spacing
    color: '#333',  
    height: '30%',
    marginBottom: height * 0.00,
    
  
    
    
  },
  // Bottom Navigation Section
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
