import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  Modal,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from '../assets/styles/AccountStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Account = () => {
  const { width } = Dimensions.get('window');
  const navigation = useNavigation();

  const [image, setImage] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [middleInitial, setMiddleInitial] = useState('');
  const [sex, setSex] = useState('');
  const [birthday, setBirthday] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [phone, setPhone] = useState('+63');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [department, setDepartment] = useState('');
  const [userType, setUserType] = useState('');
  const [year, setYear] = useState('');
  const [showModal, setShowModal] = useState(false);

  // Function to handle image picking from the library
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
      }
    } catch (error) {
      console.error('Error picking image:', error);
      Alert.alert('Error', 'Failed to pick an image.');
    }
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || birthday;
    setShowDatePicker(false);
    setBirthday(currentDate);
  };

  const handlePhoneChange = (value) => {
    if (/^\+63[0-9]*$/.test(value) && value.length <= 13) {
      setPhone(value);
    }
  };

  const isFormComplete = () => {
    const baseFieldsComplete =
      firstName.trim() !== '' &&
      surname.trim() !== '' &&
      middleInitial.trim() !== '' &&
      sex.trim() !== '' &&
      phone.trim() !== '' &&
      phone.length === 13 &&
      email.trim() !== '' &&
      address.trim() !== '' &&
      department.trim() !== '' &&
      userType.trim() !== '';

    if (userType === 'Student') {
      return baseFieldsComplete && year.trim() !== '';
    }
    return baseFieldsComplete;
  };

  const handleSubmit = () => {
    if (isFormComplete()) {
      setShowModal(true);
    } else {
      Alert.alert('Incomplete Form', 'Please fill out all fields before submitting.');
    }
  };

  const confirmSubmission = async () => {
    setShowModal(false);
  
    const userData = {
      firstName,
      surname,
      middleInitial,
      sex,
      birthday: birthday.toLocaleDateString(),
      phone,
      email,
      address,
      department,
      userType,
      year,
      image, // You'll need to upload the image separately if needed, as Supabase doesn't store images directly in rows
    };
  
    try {
      // If the image is provided, upload the image to Supabase Storage
      let imageUrl = null;
      if (image) {
        const imageName = `user_images/${Date.now()}_${image.split('/').pop()}`;
        const imageUploadResponse = await supabase.storage
          .from('profile-images')
          .upload(imageName, { uri: image }, { contentType: 'image/jpeg' });
  
        if (imageUploadResponse.error) {
          throw new Error(imageUploadResponse.error.message);
        }
  
        // Get the URL of the uploaded image
        const { publicURL, error: urlError } = supabase.storage
          .from('profile-images')
          .getPublicUrl(imageName);
        if (urlError) {
          throw new Error(urlError.message);
        }
        imageUrl = publicURL; // Image URL to be stored in the database
      }
  
      // Insert data into Supabase
      const { data, error } = await supabase
        .from('Accounts') // Ensure this table exists in your Supabase database
        .insert([
          {
            first_name: firstName,
            surname,
            middle_initial: middleInitial,
            sex,
            birthday: birthday.toLocaleDateString(),
            phone,
            email,
            address,
            department,
            user_type: userType,
            year,
            image_url: imageUrl, // Store image URL if uploaded
          },
        ]);
  
      if (error) {
        throw new Error(error.message);
      }
  
      Alert.alert('Submitted', 'Your information has been submitted successfully.');
      navigation.navigate('Profile'); // Navigate to Profile or wherever appropriate
    } catch (error) {
      console.error('Error saving user data:', error);
      Alert.alert('Error', 'Failed to save user data');
    }
  };
  

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Icon name="arrow-left" size={24} color="#000" />
            </TouchableOpacity>

            <View style={styles.profileContainer}>
              <View style={styles.imageWrapper}>
                {image ? (
                  <Image source={{ uri: image }} style={styles.profileImage} />
                ) : (
                  <Icon name="user-circle" size={width * 0.35} color="#ccc" />
                )}
                <TouchableOpacity style={styles.cameraIconContainer} onPress={pickImage}>
                  <Icon name="camera" size={20} style={styles.cameraIcon} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.formContainer}>
              <Text style={styles.sectionTitle}>Personal Information</Text>
 {/* User Type Dropdown */}
 <RNPickerSelect
                onValueChange={(value) => setUserType(value)}
                items={[
                  { label: 'Faculty', value: 'Faculty' },
                  { label: 'Staff', value: 'Staff' },
                  { label: 'Student', value: 'Student' },
                ]}
                
                placeholder={{
                  label: 'User Type:',
                  value: null,
                  color: '#9EA0A4',
                }}
                style={{
                  inputAndroid: {
                    height: styles.input.height,
                    borderColor: styles.input.borderColor,
                    borderWidth: styles.input.borderWidth,
                    borderRadius: styles.input.borderRadius,
                    paddingHorizontal: styles.input.paddingHorizontal,
                    marginBottom: styles.input.marginBottom,
                    backgroundColor: styles.input.backgroundColor,
                    color: '#000',
                  },
                  inputIOS: {
                    height: styles.input.height,
                    borderColor: styles.input.borderColor,
                    borderWidth: styles.input.borderWidth,
                    borderRadius: styles.input.borderRadius,
                    paddingHorizontal: styles.input.paddingHorizontal,
                    marginBottom: styles.input.marginBottom,
                    backgroundColor: styles.input.backgroundColor,
                    color: '#000',
                  },
                }}
                value={userType}
              />

              <TextInput
                style={styles.input}
                placeholder="First Name:"
                value={firstName}
                onChangeText={setFirstName}
              />
              <TextInput
                style={styles.input}
                placeholder="Surname:"
                value={surname}
                onChangeText={setSurname}
              />
              <View style={styles.rowContainer}>
                <TextInput
                  style={[styles.input, styles.smallInput]}
                  placeholder="Middle Initial:"
                  value={middleInitial}
                  onChangeText={setMiddleInitial}
                />

                <RNPickerSelect
                  onValueChange={(value) => setSex(value)}
                  items={[
                    { label: 'Female', value: 'Female' },
                    { label: 'Male', value: 'Male' },
                  ]}
                  placeholder={{
                    label: 'Sex:',
                    value: null,
                    color: '#9EA0A4',
                  }}
                  style={{
                    inputAndroid: {
                      height: styles.input.height,
                      borderColor: styles.input.borderColor,
                      borderWidth: styles.input.borderWidth,
                      borderRadius: styles.input.borderRadius,
                      paddingHorizontal: 55,
                      marginBottom: styles.input.marginBottom,
                      backgroundColor: styles.input.backgroundColor,
                      color: '#000',
                    },
                    inputIOS: {
                      height: styles.input.height,
                      borderColor: styles.input.borderColor,
                      borderWidth: styles.input.borderWidth,
                      borderRadius: styles.input.borderRadius,
                      paddingHorizontal: styles.input.paddingHorizontal,
                      marginBottom: styles.input.marginBottom,
                      backgroundColor: styles.input.backgroundColor,
                      color: '#000',
                    },
                  }}
                  value={sex}
                />
              </View>

              <TouchableOpacity onPress={() => setShowDatePicker(true)} activeOpacity={0.7}>
                <TextInput
                  style={styles.input}
                  placeholder="Birthday:"
                  value={birthday.toLocaleDateString()}
                  editable={false}
                  pointerEvents="none"
                />
              </TouchableOpacity>
              {showDatePicker && (
                <DateTimePicker
                  value={birthday}
                  mode="date"
                  display="default"
                  onChange={handleDateChange}
                />
              )}

              <Text style={styles.sectionTitle}>Contact Information</Text>
              <TextInput
                style={styles.input}
                placeholder="Phone Number:"
                value={phone}
                onChangeText={handlePhoneChange}
                keyboardType="phone-pad"
              />
              <TextInput
                style={styles.input}
                placeholder="Email Address:"
                value={email}
                onChangeText={setEmail}
              />
              <TextInput
                style={styles.input}
                placeholder="Address:"
                value={address}
                onChangeText={setAddress}
              />

              <RNPickerSelect
                onValueChange={(value) => setDepartment(value)}
                items={[
                  { label: 'Architecture and Fine Arts (CAFA)', value: 'Architecture and Fine Arts (CAFA)' },
                  { label: 'Arts and Sciences (CAS)', value: 'Arts and Sciences (CAS)' },
                  { label: 'Business and Accountancy (CBA)', value: 'Business and Accountancy (CBA)' },
                  { label: 'Computing and Multimedia Studies (CCMS)', value: 'Computing and Multimedia Studies (CCMS)' },
                  { label: 'Criminal Justice and Criminology (CCJC)', value: 'Criminal Justice and Criminology (CCJC)' },
                  { label: 'Education (CEd)', value: 'Education (CEd)' },
                  { label: 'Engineering (CEng)', value: 'Engineering (CEng)' },
                  { label: 'Maritime Studies (CME)', value: 'Maritime Studies (CME)' },
                  { label: 'Physical Education and Sports (IPES)', value: 'Physical Education and Sports (IPES)' },
                  { label: 'International Hospitality and Tourism Management (CIHTM)', value: 'International Hospitality and Tourism Management (CIHTM)' },
                  { label: 'Basic Education Department (BED)', value: 'Basic Education Department (BED)' },
                ]}
                placeholder={{
                  label: 'Select Department:',
                  value: null,
                  color: '#9EA0A4',
                }}
                style={{
                  inputAndroid: {
                    height: styles.input.height,
                    borderColor: styles.input.borderColor,
                    borderWidth: styles.input.borderWidth,
                    borderRadius: styles.input.borderRadius,
                    paddingHorizontal: styles.input.paddingHorizontal,
                    marginBottom: styles.input.marginBottom,
                    backgroundColor: styles.input.backgroundColor,
                    color: '#000',
                  },
                  inputIOS: {
                    height: styles.input.height,
                    borderColor: styles.input.borderColor,
                    borderWidth: styles.input.borderWidth,
                    borderRadius: styles.input.borderRadius,
                    paddingHorizontal: styles.input.paddingHorizontal,
                    marginBottom: styles.input.marginBottom,
                    backgroundColor: styles.input.backgroundColor,
                    color: '#000',
                  },
                }}
                value={department}
              />

              {/* Conditional "Select Year" Dropdown */}
              {userType === 'Student' && (
                <RNPickerSelect
                  onValueChange={(value) => setYear(value)}
                  items={[
                    { label: 'Grade 1', value: 'Grade 1' },
                    { label: 'Grade 2', value: 'Grade 2' },
                    { label: 'Grade 3', value: 'Grade 3' },
                    { label: 'Grade 4', value: 'Grade 4' },
                    { label: 'Grade 5', value: 'Grade 5' },
                    { label: 'Grade 6', value: 'Grade 6' },
                    { label: 'Grade 7', value: 'Grade 7' },
                    { label: 'Grade 8', value: 'Grade 8' },
                    { label: 'Grade 9', value: 'Grade 9' },
                    { label: 'Grade 10', value: 'Grade 10' },
                    { label: 'Grade 11', value: 'Grade 11' },
                    { label: 'Grade 12', value: 'Grade 12' },
                    { label: 'First Year', value: 'First Year' },
                    { label: 'Second Year', value: 'Second Year' },
                    { label: 'Third Year', value: 'Third Year' },
                    { label: 'Fourth Year', value: 'Fourth Year' },
                  ]}
                  placeholder={{
                    label: 'Select Year:',
                    value: null,
                    color: '#9EA0A4',
                  }}
                  style={{
                    inputAndroid: {
                      height: styles.input.height,
                      borderColor: styles.input.borderColor,
                      borderWidth: styles.input.borderWidth,
                      borderRadius: styles.input.borderRadius,
                      paddingHorizontal: styles.input.paddingHorizontal,
                      marginBottom: styles.input.marginBottom,
                      backgroundColor: styles.input.backgroundColor,
                      color: '#000',
                    },
                    inputIOS: {
                      height: styles.input.height,
                      borderColor: styles.input.borderColor,
                      borderWidth: styles.input.borderWidth,
                      borderRadius: styles.input.borderRadius,
                      paddingHorizontal: styles.input.paddingHorizontal,
                      marginBottom: styles.input.marginBottom,
                      backgroundColor: styles.input.backgroundColor,
                      color: '#000',
                    },
                  }}
                  value={year}
                />
              )}

              <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>

            <Modal
              animationType="slide"
              transparent={true}
              visible={showModal}
              onRequestClose={() => setShowModal(false)}
            >
              <View style={styles.modalOverlay}>
                <View style={styles.modalCard}>
                  <Text style={styles.modalTitle}>Confirmation</Text>
                  <Text style={styles.modalText}>
                    By submitting this form, you confirm that all the information provided is accurate and true to the best of your knowledge.
                  </Text>
                  <View style={styles.modalButtonContainer}>
                    <TouchableOpacity style={[styles.modalButton, styles.cancelButton]} onPress={() => setShowModal(false)}>
                      <Text style={styles.modalButtonText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.modalButton, styles.confirmButton]} onPress={confirmSubmission}>
                      <Text style={styles.modalButtonText}>Confirm</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Account;

//