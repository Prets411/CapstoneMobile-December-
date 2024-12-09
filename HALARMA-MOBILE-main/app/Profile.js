import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { supabase } from './lib/supabaseClient'; // Import your supabase client
import styles from '../assets/styles/ProfileStyles';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';

const Profile = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user data from Supabase
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = await supabase.auth.getUser();
        if (user?.data) {
          const { data, error } = await supabase
            .from('Accounts')
            .select('*')
            .eq('id', user.data.id)
            .single();

          if (data) {
            setUserData(data);
            setImage(data.image_url || null);
          } else {
            Alert.alert('Error', 'User not found in the database.');
          }
        }
      } catch (error) {
        Alert.alert('Error', 'Failed to load user data from Supabase');
        console.error('Error loading user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // Image picker function
  const pickImage = async () => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permissionResult.granted) {
        Alert.alert("Permission to access camera roll is required!");
        return;
      }

      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const selectedImage = result.assets[0].uri;
        setImage(selectedImage);

        // Update the stored userData with the new image
        const updatedUserData = { ...userData, image_url: selectedImage };
        setUserData(updatedUserData);

        // Optionally update image URL in Supabase storage (if you want to save the image in Supabase storage)
        const imageUploadResult = await uploadImageToSupabase(selectedImage);
        if (imageUploadResult?.url) {
          updatedUserData.image_url = imageUploadResult.url;
        }

        // Update user data in Supabase
        await updateUserData(updatedUserData);
      }
    } catch (error) {
      console.error('Error picking image:', error);
      Alert.alert('Error', 'Failed to pick an image.');
    }
  };

  // Upload image to Supabase storage and get the URL
  const uploadImageToSupabase = async (imageUri) => {
    try {
      const response = await fetch(imageUri);
      const blob = await response.blob();
      const fileName = `${new Date().getTime()}-${imageUri.split('/').pop()}`;
      const { data, error } = await supabase.storage
        .from('avatars')
        .upload(fileName, blob);

      if (error) {
        throw new Error('Failed to upload image');
      }

      const imageUrl = supabase.storage.from('avatars').getPublicUrl(fileName).publicURL;
      return { url: imageUrl };
    } catch (error) {
      console.error('Error uploading image:', error);
      Alert.alert('Error', 'Failed to upload image.');
    }
  };

  // Update user data in Supabase
  const updateUserData = async (updatedUserData) => {
    try {
      const { error } = await supabase
        .from('Accounts')
        .upsert([updatedUserData]);

      if (error) {
        throw new Error('Failed to update user data in Supabase');
      }

      Alert.alert('Success', 'Profile updated successfully');
    } catch (error) {
      Alert.alert('Error', error.message || 'Failed to update user data');
    }
  };

  // Loading state before rendering
  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.infoText}>Loading user data...</Text>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          {/* Profile Image Section */}
          <View style={styles.profileContainer}>
            <View style={styles.imageWrapper}>
              {image ? (
                <Image source={{ uri: image }} style={styles.profileImage} />
              ) : (
                <FontAwesome name="user-circle" size={100} color="#ccc" />
              )}
              <TouchableOpacity style={styles.cameraIconContainer} onPress={pickImage}>
                <Icon name="camera" size={20} color="#000" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Header Section */}
          <View style={styles.profileHeader}>
            <Text style={styles.profileName}>{`${userData.firstName} ${userData.middleInitial} ${userData.surname}`}</Text>
            <TouchableOpacity style={styles.editIcon} onPress={() => navigation.navigate('ProfileEdit', { userData })}>
              <Icon name="edit" size={20} color="#000" />
            </TouchableOpacity>
          </View>

          {/* Personal Information Section */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Personal Information:</Text>
            <Text style={styles.infoText}>Full Name: {`${userData.firstName} ${userData.middleInitial} ${userData.surname}`}</Text>
            <Text style={styles.infoText}>Date of Birth: {userData.birthday}</Text>
            <Text style={styles.infoText}>Sex: {userData.sex}</Text>
            <Text style={styles.infoText}>User Type: {userData.userType}</Text>
            {userData.userType === 'Student' && <Text style={styles.infoText}>Year: {userData.year}</Text>}
          </View>

          {/* Contact Information Section */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Contact Information:</Text>
            <Text style={styles.infoText}>Phone: {userData.phone}</Text>
            <Text style={styles.infoText}>Email: {userData.email}</Text>
            <Text style={styles.infoText}>Address: {userData.address}</Text>
            <Text style={styles.infoText}>Department: {userData.department}</Text>
          </View>

          {/* View Report History Link */}
          <TouchableOpacity style={styles.reportLink} onPress={() => Alert.alert('View Report History')}>
            <Text style={styles.reportLinkText}>View Report History</Text>
          </TouchableOpacity>

          {/* Bottom Navigation */}
          <View style={styles.bottomNav}>
            <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Homepages')}>
              <Icon name="home" size={25} color="#333" style={styles.navIcon} />
              <Text style={styles.navText}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Notification')}>
              <Icon name="bell" size={25} color="#333" style={styles.navIcon} />
              <Text style={styles.navText}>Notifications</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('History')}>
              <Icon name="history" size={25} color="#333" style={styles.navIcon} />
              <Text style={styles.navText}>History</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
              <Icon name="user" size={25} color="#333" style={styles.navIcon} />
              <Text style={styles.navText}>Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Profile;
