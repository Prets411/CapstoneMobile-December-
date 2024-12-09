import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter for navigation
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for back icon
import styles from '../assets/styles/NextScreenStyles';

const NextScreen = () => {
  const router = useRouter(); // Initialize the router

  return (
    <View style={styles.container}>
      {/* Back Button with Icon */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()} // Navigate to the previous screen
      >
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      {/* Logo and Subtitle */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/bell_halarmaS23.png')} style={styles.image} />
        <Text style={styles.subtitle}>
          Simplify, Inform, Empower: Your Information Solution.
        </Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.description}>
          HALA!RMA is an application designed for the health and safety office, facilitating prompt information dissemination during critical events or unforeseen emergencies.
        </Text>
      </View>

      {/* Buttons for Login and Signup */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/Login')} // Navigate to the login screen
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/Signup')} // Navigate to the signup screen
        >
          <Text style={styles.buttonText}>Sign-up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NextScreen;
