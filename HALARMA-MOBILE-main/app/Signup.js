import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/Feather';
import { supabase } from './lib/supabase';
import styles from '../assets/styles/SignupStyles';

const Signup = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignUpPress = async () => {
    if (!email || !id || !password || !confirmPassword) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    setLoading(true);

    try {
      // Check if email is already registered in Supabase auth
      const { data: existingUser, error: fetchError } = await supabase.auth.admin.listUsers({
        email
      });

      if (existingUser?.users?.length > 0) {
        Alert.alert('Error', 'Email is already registered.');
        setLoading(false);
        return;
      }

      // Attempt signup with Supabase
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { id }, // Store custom ID in user metadata
        },
      });

      if (error) {
        console.error('Sign-Up Error:', error);
        Alert.alert('Sign-Up Error', error.message);
      } else if (data.user) {
        Alert.alert(
          'Confirmation Sent',
          'An OTP has been sent to your email address. Please enter it to verify your account.'
        );

        router.push({ pathname: '/EmailVerification', params: { email } });
      }
    } catch (err) {
      console.error('Sign-Up Error:', err);
      Alert.alert('Error', 'An unexpected error occurred.');
    } finally {
      setLoading(false);
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

      <Text style={styles.title}>SIGN UP</Text>
      <Text style={styles.subtitle}>Simplify, Inform, Empower: Your Information Solution.</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter ID"
        value={id}
        onChangeText={setId}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.signupButton} onPress={handleSignUpPress} disabled={loading}>
        <Text style={styles.signupButtonText}>
          {loading ? 'Creating account...' : 'Sign Up'}
        </Text>
      </TouchableOpacity>

      <View style={styles.footerLinks}>
        <Text style={styles.footerText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => router.push('/Login')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
