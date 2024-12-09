import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import { supabase } from './lib/supabase';
import styles from '../assets/styles/TwoFactorAuthStyles';

const TwoFactorAuth = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { email } = route.params;

  const [code, setCode] = useState('');
  const [resendTimer, setResendTimer] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [isVerified, setIsVerified] = useState(false);

  // Countdown timer for the resend button
  useEffect(() => {
    let timer;
    if (resendTimer > 0) {
      timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
    } else {
      setIsResendDisabled(false);
    }
    return () => clearTimeout(timer);
  }, [resendTimer]);

  // Function to verify the OTP
  const handleVerifyCode = async () => {
    if (isVerified) return; // Prevent multiple verifications after success

    try {
      const { data, error } = await supabase.auth.verifyOtp({
        email,
        token: code,
        type: 'email',
      });

      if (error) {
        console.error('OTP verification error:', error);
        if (error.message === 'Token has expired or is invalid') {
          Alert.alert('Error', 'The OTP has expired. Please request a new one.');
        } else {
          Alert.alert('Error', 'Invalid OTP. Please try again.');
        }
        return;
      }

      // OTP verified successfully
      setIsVerified(true); // Prevent further verifications
      Alert.alert('Success', 'OTP Verified!');
      console.log('OTP verification successful:', JSON.stringify(data, null, 2));

      // Navigate to home page if verification is successful and session is valid
      if (data?.session) {
        navigation.navigate('Homepages');
      } else {
        Alert.alert('Error', 'No active session found. Please log in again.');
      }
    } catch (err) {
      console.error('Unexpected error during OTP verification:', err);
      Alert.alert('Error', 'An unexpected error occurred. Please try again.');
    }
  };

  // Resend OTP function with countdown timer reset
  const handleResendOtp = async () => {
    if (isResendDisabled) return;

    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) {
      console.error('Failed to resend OTP:', error);
      Alert.alert('Error', 'Could not resend OTP. Please try again later.');
      return;
    }

    setResendTimer(30); // Reset timer for resend
    setIsResendDisabled(true);
    Alert.alert('OTP Sent', 'A new OTP has been sent to your email.');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={24} color="#000" />
      </TouchableOpacity>

      <View style={styles.logoContainer}>
        <Image source={require('../assets/bell_halarmaS23.png')} style={styles.logo} />
      </View>

      <Text style={styles.title}>EMAIL VERIFICATION</Text>
      <Text style={styles.subtitle}>
        We sent a confirmation code to the email address you provided: {email}
      </Text>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter OTP"
          keyboardType="numeric"
          value={code}
          onChangeText={setCode}
        />

        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleVerifyCode}
          disabled={isVerified} // Disable button if already verified
        >
          <Text style={styles.loginButtonText}>Verify Code</Text>
        </TouchableOpacity>

        <Text style={styles.resendText}>Didn't receive the code?</Text>
        <TouchableOpacity
          style={[styles.resendContainer, isResendDisabled ? styles.disabledButton : null]}
          onPress={handleResendOtp}
          disabled={isResendDisabled}
        >
          <Text style={styles.resendLink}>
            {isResendDisabled ? `Resend Code in ${resendTimer}s` : 'Resend Code'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TwoFactorAuth;
