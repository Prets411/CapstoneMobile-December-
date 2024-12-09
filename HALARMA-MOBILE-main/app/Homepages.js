import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter for navigation
import Icon from 'react-native-vector-icons/FontAwesome5'; // Import FontAwesome5 icons
import styles from '../assets/styles/HomepageStyles'; // Import styles

const Homepage = () => {
  const router = useRouter(); // Initialize the router
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ['rgba(255, 100, 100, 0.5)', 'rgba(255, 165, 0, 0.5)', 'rgba(100, 255, 100, 0.5)']; // Light, semi-transparent colors for blinking

  // Cycle background color every second
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000); // Change color every second

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: colors[colorIndex] }]}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/bell_halarmaS23.png')} style={styles.logo} />
      </View>

      {/* Grid Section */}
      <View style={styles.gridContainer}>
        <TouchableOpacity style={styles.gridItem} onPress={() => router.push('/Announcements')}>
          <Image source={require('../assets/icons/Announcements.png')} style={styles.icon} />
          <Text style={styles.iconLabel}>Announcements</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem} onPress={() => router.push('/Profile')}>
          <Image source={require('../assets/icons/Profile.png')} style={styles.icon} />
          <Text style={styles.iconLabel}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem} onPress={() => router.push('/Programs')}>
          <Image source={require('../assets/icons/Programs.png')} style={styles.icon} />
          <Text style={styles.iconLabel}>Programs</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem} onPress={() => router.push('/IncidentReport')}>
          <Image source={require('../assets/icons/Reports.png')} style={styles.icon} />
          <Text style={styles.iconLabel}>Incident Report</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem} onPress={() => router.push('/AlertWheelColor')}>
          <Image source={require('../assets/icons/Color Wheel.png')} style={styles.icon} />
          <Text style={styles.iconLabel}>Alerts Color Wheel Legend</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem} onPress={() => router.push('/Settings')}>
          <Image source={require('../assets/icons/Setting.png')} style={styles.icon} />
          <Text style={styles.iconLabel}>Settings</Text>
        </TouchableOpacity>
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

export default Homepage;
