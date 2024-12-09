import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Modal, TouchableWithoutFeedback, Platform, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import styles from '../assets/styles/IncidentReportStyles'; 
import CalendarPicker from 'react-native-calendar-picker'; 
import moment from 'moment'; 
import DateTimePicker from '@react-native-community/datetimepicker'; 
import Icon from 'react-native-vector-icons/FontAwesome5'; 
import { Picker } from '@react-native-picker/picker'; 
import { supabase } from './lib/supabaseClient';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

const IncidentReport = () => {
  const [location, setLocation] = useState('');
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [timeObserved, setTimeObserved] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [isOtherLocation, setIsOtherLocation] = useState(false);
  const [room, setRoom] = useState('');
  const [floor, setFloor] = useState('1');
  const router = useRouter();

  // Load session data from AsyncStorage when component mounts
  useEffect(() => {
    const loadSessionData = async () => {
      try {
        const locationData = await AsyncStorage.getItem('location');
        const roomData = await AsyncStorage.getItem('room');
        const floorData = await AsyncStorage.getItem('floor');
        const timeData = await AsyncStorage.getItem('timeObserved');
        const dateData = await AsyncStorage.getItem('selectedStartDate');

        if (locationData) setLocation(locationData);
        if (roomData) setRoom(roomData);
        if (floorData) setFloor(floorData);
        if (timeData) setTimeObserved(timeData);
        if (dateData) setSelectedStartDate(moment(dateData).toDate());
      } catch (error) {
        console.error("Failed to load session data", error);
      }
    };

    loadSessionData();
  }, []);

  const handleNext = () => {
    // Save session data to AsyncStorage before navigating
    const saveSessionData = async () => {
      try {
        await AsyncStorage.setItem('location', location);
        await AsyncStorage.setItem('room', room);
        await AsyncStorage.setItem('floor', floor);
        await AsyncStorage.setItem('timeObserved', timeObserved);
        await AsyncStorage.setItem('selectedStartDate', moment(selectedStartDate).format());
      } catch (error) {
        console.error("Failed to save session data", error);
      }
    };

    saveSessionData().then(() => {
      router.push('/SecIncidentReport');
    });
  };

  const handleDateChange = (date) => {
    setSelectedStartDate(date);
    setShowCalendar(false);
  };

  const handleTimeChange = (event, selectedDate) => {
    const currentDate = selectedDate || timeObserved;
    setShowTimePicker(false);
    setTimeObserved(moment(currentDate).format('HH:mm'));
  };

  const handleLocationChange = (value) => {
    if (value === 'Others') {
      setIsOtherLocation(true);
    } else {
      setIsOtherLocation(false);
    }
    setLocation(value);
    AsyncStorage.setItem('location', value); // Save location to AsyncStorage
  };

  const handleRoomChange = (value) => {
    setRoom(value);
    AsyncStorage.setItem('room', value); // Save room to AsyncStorage
  };

  const handleFloorChange = (value) => {
    setFloor(value);
    AsyncStorage.setItem('floor', value); // Save floor to AsyncStorage
  };

  const locationOptions = [
    { label: 'Architecture and Fine Arts (CAFA)', value: 'Architecture and Fine Arts (CAFA)' },
    // Add other options here
  ];

  // Sort the options alphabetically and ensure "Others" is at the end
  const sortedLocationOptions = locationOptions.sort((a, b) => {
    if (a.value === 'Others') return 1; // 'Others' should be last
    if (b.value === 'Others') return -1; // 'Others' should be last
    return a.label.localeCompare(b.label); // Alphabetical sorting
  });

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollViewContainer}
          showsVerticalScrollIndicator={false} // Hide the scrollbar indicator
        >
          {/* Form Fields */}
          <Text style={styles.headerText}>Incident Report Form</Text>
          <Text style={styles.subHeaderText}>Nature Of Hazard</Text>
          <Text style={styles.label}>Location</Text>

          {/* Location Dropdown */}
          <Picker
            selectedValue={location}
            style={styles.picker}
            onValueChange={handleLocationChange}>
            {sortedLocationOptions.map((option) => (
              <Picker.Item label={option.label} value={option.value} key={option.value} />
            ))}
          </Picker>

          {/* Input for Other Location if 'Others' is selected */}
          {isOtherLocation ? (
            <TextInput
              style={styles.input}
              placeholder="Enter Custom Location"
              value={location}
              onChangeText={(value) => {
                setLocation(value);
                AsyncStorage.setItem('location', value); // Save to AsyncStorage
              }}
            />
          ) : (
            <>
              {/* Room input */}
              <Text style={styles.label}>Room</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Room"
                value={room}
                onChangeText={handleRoomChange}
              />

              {/* Floor dropdown */}
              <Text style={styles.label}>Floor</Text>
              <Picker
                selectedValue={floor}
                style={styles.picker}
                onValueChange={handleFloorChange}>
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
              </Picker>
            </>
          )}

          {/* Date Picker */}
          <Text style={styles.label}>Date</Text>
          <TouchableWithoutFeedback onPress={() => setShowCalendar(true)}>
            <View style={styles.dateInputContainer}>
              <Text style={styles.dateInputText}>
                {selectedStartDate ? moment(selectedStartDate).format('MM/DD/YYYY') : 'Enter Date'}
              </Text>
              <Image
                source={require('../assets/icons/Calendar.png')}
                style={styles.calendarIcon}
              />
            </View>
          </TouchableWithoutFeedback>

          {/* Time Picker */}
          <Text style={styles.labelTime}>Time of Observation</Text>
          <TouchableWithoutFeedback onPress={() => setShowTimePicker(true)}>
            <View style={styles.dateInputContainer}>
              <Text style={styles.dateInputText}>
                {timeObserved ? timeObserved : 'Enter Time'}
              </Text>
              <Image
                source={require('../assets/icons/Clock-icon.png')}
                style={styles.calendarIcon}
              />
            </View>
          </TouchableWithoutFeedback>

          {/* Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Calendar Modal */}
      <Modal visible={showCalendar} transparent={true} animationType="fade" onRequestClose={() => setShowCalendar(false)}>
        <View style={styles.calendarModalOverlay}>
          <TouchableWithoutFeedback onPress={() => setShowCalendar(false)}>
            <View style={styles.calendarModalClose} />
          </TouchableWithoutFeedback>
          <CalendarPicker
            onDateChange={handleDateChange}
            selectedStartDate={selectedStartDate}
          />
        </View>
      </Modal>

      {/* Time Picker Modal */}
      <Modal visible={showTimePicker} transparent={true} animationType="fade" onRequestClose={() => setShowTimePicker(false)}>
        <View style={styles.timeModalOverlay}>
          <TouchableWithoutFeedback onPress={() => setShowTimePicker(false)}>
            <View style={styles.timeModalClose} />
          </TouchableWithoutFeedback>
          <DateTimePicker
            mode="time"
            value={new Date()}
            display="default"
            onChange={handleTimeChange}
          />
        </View>
      </Modal>
    </View>
  );
};

export default IncidentReport;
