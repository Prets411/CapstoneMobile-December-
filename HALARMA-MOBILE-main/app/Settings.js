import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter for navigation
import Icon from 'react-native-vector-icons/FontAwesome5'; // For the icons
import styles from '../assets/styles/SettingsStyles'; // Import the styles
import { supabase } from './lib/supabase'; // Ensure you have the correct path to the supabase client

const Settings = () => {
  const router = useRouter(); // Initialize the router
  const [userEmail, setUserEmail] = useState(null);

  // Verify session when the component mounts
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error || !session) {
        // If there's no session or an error, redirect to Login
        router.replace('/Login');
      } else {
        setUserEmail(session.user.email); // Set the user's email
      }
    };

    checkSession();
  }, []);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut(); // Sign out the user
      Alert.alert('Success', 'You have been logged out.');
      router.replace('/Login'); // Navigate to Login screen after logout
    } catch (error) {
      console.error('Error logging out:', error.message);
      Alert.alert('Error', 'Failed to log out. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo and Heading */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/bell_halarmaS23.png')} style={styles.logo} />
      </View>

      {/* Settings Heading */}
      <Text style={styles.headerText}>Settings</Text>

      {/* Settings List */}
      <View style={styles.settingsList}>
        <TouchableOpacity style={styles.settingsItem} onPress={() => router.push('/Help')}>
          <Icon name="question-circle" size={20} color="#800000" style={styles.settingsIcon} />
          <Text style={styles.settingsText}>Help</Text>
          <Icon name="chevron-right" size={20} color="#800000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingsItem} onPress={() => router.push('/NotificationPreference')}>
          <Icon name="bell" size={20} color="#800000" style={styles.settingsIcon} />
          <Text style={styles.settingsText}>Notification Preference</Text>
          <Icon name="chevron-right" size={20} color="#800000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingsItem} onPress={() => router.push('/Privacy&Security')}>
          <Icon name="user-shield" size={20} color="#800000" style={styles.settingsIcon} />
          <Text style={styles.settingsText}>Privacy & Security</Text>
          <Icon name="chevron-right" size={20} color="#800000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingsItem} onPress={() => router.push('/ChangePassword')}>
          <Icon name="lock" size={20} color="#800000" style={styles.settingsIcon} />
          <Text style={styles.settingsText}>Change Password</Text>
          <Icon name="chevron-right" size={20} color="#800000" />
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
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

export default Settings;
