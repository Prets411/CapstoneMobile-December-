import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { supabase } from './lib/supabase';
import styles from '../assets/styles/NewPasswordResetStyles';
import Icon from 'react-native-vector-icons/Feather';

const NewPasswordReset = () => {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handlePasswordReset = async () => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: 'https://your-app-url/reset', // Replace with your actual redirect URL
      });

      if (error) {
        Alert.alert('Error', 'This email is not registered or an error occurred.');
        return;
      }

      Alert.alert('Success', 'Check your email for a password reset link.');
      // Navigate to the ResetPassword screen
      router.push({
        pathname: '/ResetPassword',
        params: { email }, // Pass the email as a parameter to ResetPassword
      });
    } catch (err) {
      console.error('Error during password reset:', err);
      Alert.alert('Error', 'An error occurred while processing your request.');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Icon name="arrow-left" size={24} color="#000" />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/bell_halarmaS23.png')} style={styles.logo} />
      </View>
      <Text style={styles.title}>Reset Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.submitButton} onPress={handlePasswordReset}>
        <Text style={styles.submitButtonText}>Send Reset Email</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewPasswordReset;
