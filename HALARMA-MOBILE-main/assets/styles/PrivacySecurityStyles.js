import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',  // Softer background color for a clean, minimalistic look
    padding: 20,
  },
  section: {
   
    marginVertical: 40,
    marginBottom: 10, // Increased spacing between sections for a more open feel
  },
  heading: {
    fontSize: 26,  // Slightly larger heading
    fontWeight: 'bold',
    color: '#800000',  // Maroon color for the main heading
    marginBottom: 15,  // Increased bottom margin for more breathing room
  },
  subheading: {
    fontSize: 20,  // Increased font size for subheadings
    fontWeight: '600',
    color: '#800000',  // Maroon color for subheadings as well
    // More space between subheading and text
  },
  paragraph: {
    fontSize: 16,  // Keeping the text size consistent for readability
    lineHeight: 24,  // Slightly increased line height for better readability
    color: '#4A4A4A',  // Darker gray for body text to soften the contrast
    marginBottom: 25,  // Consistent spacing between paragraphs
  },
});

export default styles;
