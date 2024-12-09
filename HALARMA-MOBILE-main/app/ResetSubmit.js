import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { supabase } from './lib/supabase';
import styles from '../assets/styles/ResetPasswordStyles';
import Icon from 'react-native-vector-icons/Feather';

const ResetSubmit = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const { email } = route.params;

  const handlePasswordUpdate = async () => {
    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    try {
      const { error } = await supabase.auth.updateUser({ password: newPassword });

      if (error) {
        Alert.alert('Error', error.message);
        return;
      }

      Alert.alert('Success', 'Password updated successfully.');
      navigation.navigate('Login'); // Redirect to the login screen
    } catch (err) {
      console.error('Error updating password:', err);
      Alert.alert('Error', 'An error occurred while updating your password.');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={24} color="#000" />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/bell_halarmaS23.png')} style={styles.logo} />
      </View>
      <Text style={styles.title}>Set New Password</Text>
      <TextInput
        style={styles.input}
        placeholder="New Password"
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity style={styles.submitButton} onPress={handlePasswordUpdate}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResetSubmit;
