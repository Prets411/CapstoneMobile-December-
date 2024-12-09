import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter for navigation
import Icon from 'react-native-vector-icons/Feather'; // Back arrow icon
import { supabase } from './lib/supabase'; // Import your Supabase instance
import styles from '../assets/styles/ChangePasswordStyles'; // Import the styles

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter(); // Initialize the router

  // Function to handle password change
  const handleSave = async () => {
    if (newPassword !== confirmPassword) {
      return Alert.alert('Error', 'New passwords do not match');
    }

    try {
      // Get the current logged-in user's session using getUser
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      
      if (userError || !user) {
        return Alert.alert('Error', 'User is not logged in');
      }

      // Attempt to sign in with the old password to verify it
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: user.email, // Use the logged-in user's email
        password: oldPassword,
      });

      if (signInError) {
        return Alert.alert('Error', 'Old password is incorrect');
      }

      // If old password is correct, update the password
      const { error: updateError } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (updateError) {
        return Alert.alert('Error', 'Failed to change password');
      }

      Alert.alert('Success', 'Password changed successfully');
      router.back(); // Navigate back after successful password change
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Something went wrong');
    }
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Icon name="arrow-left" size={24} color="#000" />
      </TouchableOpacity>
      <Image source={require('../assets/bell_halarmaS23.png')} style={styles.logo} />

      {/* Heading */}
      <Text style={styles.headerText}>Change Password</Text>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Enter Old Password:"
        secureTextEntry
        value={oldPassword}
        onChangeText={setOldPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter New Password:"
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password:"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangePassword;
