import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter for navigation
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../assets/styles/ReportSuccessStyles'; // Import the styles

const ReportSuccess = () => {
  const router = useRouter(); // Initialize the router

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/bell_halarmaS23.png')} style={styles.logo} />
      </View>

      {/* Success Message */}
      <Text style={styles.successMessage}>
        Your report has been successfully recorded.
        Please wait for the reply from the admin.
        THANK YOU!
      </Text>

      {/* Action Buttons */}
      <TouchableOpacity style={styles.reportButton} onPress={() => router.push('/IncidentReport')}>
        <Text style={styles.buttonText}>Report Another</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.historyButton} onPress={() => router.push('/History')}>
        <Text style={styles.buttonText}>History</Text>
      </TouchableOpacity>

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

export default ReportSuccess;
