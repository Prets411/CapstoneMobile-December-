import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { supabase } from './lib/supabase';
import styles from '../assets/styles/ResetPasswordStyles';
import Icon from 'react-native-vector-icons/Feather';

const ResetPassword = () => {
  const [otp, setOtp] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const { email } = route.params; // Get the user's email from the route

  const handleOtpVerification = async () => {
    try {
      // Verify the OTP via Supabase (only use the first 4 digits of the token)
      const { data, error } = await supabase.auth.verifyOtp({
        email,
        token: otp, // Use the entered 4-digit OTP
        type: 'recovery', // Ensure it's for password recovery
      });

      if (error) {
        Alert.alert('Invalid OTP', 'The OTP you entered is incorrect or expired.');
        return;
      }

      // If OTP is verified, navigate to ResetSubmit screen
      Alert.alert('Success', 'OTP verified! Proceed to reset your password.');
      navigation.navigate('ResetSubmit', { email });
    } catch (err) {
      console.error('Error verifying OTP:', err);
      Alert.alert('Error', 'An error occurred during OTP verification.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={24} color="#000" />
      </TouchableOpacity>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/bell_halarmaS23.png')} style={styles.logo} />
      </View>

      {/* Title */}
      <Text style={styles.title}>Verify OTP</Text>
      <Text style={styles.subtitle}>Enter the 6-digit code sent to your email.</Text>

      {/* OTP Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        keyboardType="numeric"
        maxLength={6} // Limit input to 4 digits
        value={otp}
        onChangeText={setOtp}
      />

      {/* Verify Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleOtpVerification}>
        <Text style={styles.submitButtonText}>Verify OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResetPassword;
