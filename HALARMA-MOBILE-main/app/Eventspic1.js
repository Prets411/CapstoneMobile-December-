import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter for navigation
import Icon from 'react-native-vector-icons/FontAwesome5'; // Import Icon for navigation icons
import styles from '../assets/styles/EventsStyles'; // Assuming styles are imported from a separate file

const Eventspic1 = () => {
  const router = useRouter(); // Initialize the router

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/bell_halarmaS23.png')} style={styles.logo} />
      </View>

      {/* Event Image and Title */}
      <Image source={require('../assets/images/event1.png')} style={styles.eventImage} />

      {/* Event Title */}
      <Text style={styles.eventTitle}>Basta Envergan, Ligtas sa Kapahamakan</Text>
      <View style={styles.separator} />

      {/* Event Description */}
      <View style={styles.eventDescriptionContainer}>
        <Text style={styles.eventDescription}>
          Basic Life Support (BLS) training plays a critical role in ensuring the well-being of individuals within a workplace or community setting. Basic Life Support training is an integral component of a comprehensive health and safety program within an organization. It empowers employees to respond promptly and effectively to medical emergencies, aligning with the overarching goals of maintaining a safe and healthy work environment. Health and Safety Officers play a key role in implementing and overseeing BLS training initiatives.
        </Text>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/Homepages')}>
          <Icon name="home" size={25} color="#333" style={styles.navIcon} />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/Notification')}>
          <Icon name="bell" size={25} color="#333" style={styles.navIcon} />
          <Text style={styles.navText}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/History')}>
          <Icon name="history" size={25} color="#333" style={styles.navIcon} />
          <Text style={styles.navText}>History</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/Profile')}>
          <Icon name="user" size={25} color="#333" style={styles.navIcon} />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Eventspic1;
