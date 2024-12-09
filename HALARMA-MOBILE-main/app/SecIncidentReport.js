import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, ScrollView, Modal } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as ImagePicker from 'expo-image-picker';
import styles from '../assets/styles/SecIncidentReportStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as FileSystem from 'expo-file-system'; // For reading the image file as base64 or blob

const SecIncidentReport = () => {
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false); // Modal state
  const router = useRouter();

  // Load saved form data on component mount
  useEffect(() => {
    const loadFormData = async () => {
      try {
        const savedDescription = await AsyncStorage.getItem('description');
        const savedImage = await AsyncStorage.getItem('image');
        if (savedDescription) setDescription(savedDescription);
        if (savedImage) setImage(savedImage);
      } catch (error) {
        console.error('Error loading form data', error);
      }
    };
    loadFormData();
  }, []);

  // Save form data to AsyncStorage
  const saveFormData = async () => {
    try {
      await AsyncStorage.setItem('description', description);
      await AsyncStorage.setItem('image', image);
    } catch (error) {
      console.error('Error saving form data', error);
    }
  };

  // Function to handle image selection
  const handleImagePicker = async (fromCamera = false) => {
    try {
      let permissionResult;
      if (fromCamera) {
        permissionResult = await ImagePicker.requestCameraPermissionsAsync();
      } else {
        permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      }

      if (!permissionResult.granted) {
        Alert.alert(
          'Permission Denied',
          `Permission to access the ${fromCamera ? 'camera' : 'media library'} is required!`
        );
        return;
      }

      const result = fromCamera
        ? await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          })
        : await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });

      if (!result.canceled) {
        const selectedImageUri = result.assets ? result.assets[0].uri : result.uri;
        setImage(selectedImageUri);

        // Upload the image after it's selected
        await uploadImage(selectedImageUri);  // Assuming uploadImage is an async function
      }
    } catch (error) {
      console.error('Error picking image:', error);
      Alert.alert('Error', 'An error occurred while selecting the image. Please try again.');
    } finally {
      setModalVisible(false); // Close modal after picking image
    }
  };

  // Function to delete the image
  const handleDeleteImage = () => {
    setImage(null);
    Alert.alert('Image Removed', 'The image has been removed successfully.');
  };

  // Function to upload the image to a server (Example with fetch)
  const uploadImage = async (imageUri) => {
    try {
      // Step 1: Read the image file as Base64 (or Blob if you prefer)
      const imageData = await FileSystem.readAsStringAsync(imageUri, {
        encoding: FileSystem.EncodingType.Base64,
      });

      // Step 2: Prepare form data for upload
      const formData = new FormData();
      formData.append('file', {
        uri: imageUri,
        type: 'image/jpeg', // Adjust mime type according to the image file type
        name: 'image.jpg', // Provide a name for the image file (can be dynamic)
      });

      // Step 3: Send the image via a POST request
      const response = await fetch('YOUR_UPLOAD_API_URL', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          // Add authentication headers if necessary
        },
      });

      // Step 4: Handle response
      if (response.ok) {
        const responseData = await response.json();
        console.log('Image uploaded successfully:', responseData);
        Alert.alert('Success', 'Image uploaded successfully!');
      } else {
        throw new Error('Failed to upload image');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      Alert.alert('Error', 'An error occurred while uploading the image.');
    }
  };

  // Function to handle form submission
  const handleSubmit = async () => {
    if (!description) {
      Alert.alert('Error', 'Please enter a description.');
      return;
    }

    try {
      // Save form data to AsyncStorage
      await saveFormData();

      // Post the data to backend (replace with actual API request)
      const response = await fetch('https://bmtrvbxbqdmzfhyotepu.supabase.co/incident', { // Replace URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          description,
          image,
        }),
      });

      if (response.ok) {
        Alert.alert('Success', 'Your incident report has been submitted successfully.');
        router.push('/ReportSuccess');
      } else {
        Alert.alert('Error', 'Failed to submit the report. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form', error);
      Alert.alert('Error', 'An error occurred. Please try again later.');
    }
  };
  const apiUrl = 'YOUR_UPLOAD_API_URL'; // replace with your API URL
fetch(apiUrl)
  .then(response => response.json())
  .then(data => console.log('API reachable:', data))
  .catch(error => console.log('Error reaching API:', error));

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.headerText}>Incident Report Form</Text>
        <Text style={styles.subbHeaderText}>Nature Of Hazard</Text>
        <Text style={styles.subHeaderText}>Other Details:</Text>

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.textArea}
          multiline
          numberOfLines={5}
          placeholder="Enter Description"
          value={description}
          onChangeText={setDescription}
        />
        <Text style={styles.exampleText}>Eg. slippery floor, exposed wiring, broken equipment</Text>

        <Text style={styles.label}>Photographic Evidence</Text>
        <TouchableOpacity
          style={styles.imageUploadContainer}
          onPress={() => setModalVisible(true)}
        >
          {image ? (
            <Image source={{ uri: image }} style={styles.uploadedImage} />
          ) : (
            <Text style={styles.imageUploadText}>Tap to select or capture an image</Text>
          )}
        </TouchableOpacity>
        {image && (
          <TouchableOpacity style={styles.deleteImageButton} onPress={handleDeleteImage}>
            <Icon name="trash" size={20} color="#FFF" />
            <Text style={styles.deleteImageButtonText}>Delete Image</Text>
          </TouchableOpacity>
        )}

        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Select Image Source</Text>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => handleImagePicker(true)}
              >
                <Icon name="camera" size={20} color="#FFF" />
                <Text style={styles.modalButtonText}>Take a Photo</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => handleImagePicker(false)}
              >
                <Icon name="images" size={20} color="#FFF" />
                <Text style={styles.modalButtonText}>Choose from Gallery</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalCloseButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalCloseButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/Homepages')}>
          <Icon name="home" size={20} color="#000" />
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SecIncidentReport;
