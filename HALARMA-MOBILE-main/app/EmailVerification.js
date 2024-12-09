import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import { supabase } from './lib/supabase';
import styles from '../assets/styles/EmailVerificationStyles';

const EmailVerification = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { email } = route.params;

  const [enteredOtp, setEnteredOtp] = useState('');
  const [resendTimer, setResendTimer] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  useEffect(() => {
    let timer;
    if (resendTimer > 0) {
      timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
    } else {
      setIsResendDisabled(false);
    }
    return () => clearTimeout(timer);
  }, [resendTimer]);

  const handleVerifyOtp = async () => {
    try {
      const { data, error } = await supabase.auth.verifyOtp({
        email,
        token: enteredOtp,
        type: 'signup',
      });

      if (error) {
        throw error;
      }

      Alert.alert('Success', 'Your email has been verified successfully!');

      navigation.navigate('Accounts'); // Navigate to the main screen
    } catch (err) {
      console.error('OTP verification failed:', err);
      Alert.alert('Error', 'Invalid OTP. Please try again.');
    }
  };

  const handleResendOtp = async () => {
    if (isResendDisabled) return;

    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) {
      console.error('Resend OTP Error:', error);
      Alert.alert('Error', 'Failed to resend OTP. Please try again later.');
      return;
    }

    setResendTimer(30);
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
          placeholder="Enter code"
          keyboardType="numeric"
          value={enteredOtp}
          onChangeText={setEnteredOtp}
        />

        <TouchableOpacity style={styles.sendButton} onPress={handleVerifyOtp}>
          <Text style={styles.sendButtonText}>Verify Code</Text>
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

export default EmailVerification;
