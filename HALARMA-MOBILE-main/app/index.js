import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Animated, Image, ImageBackground, Dimensions } from 'react-native';
import { useRouter } from 'expo-router'; // For navigation
import { supabase } from './lib/supabaseClient'; // Import your Supabase client
import styles from '../assets/styles/indexStyles'; // Import your existing shared styles
import buttonStyles from '../assets/styles/ButtonStyles'; // Import button styles

const { width } = Dimensions.get('window'); // Screen width for animation reference

const FirstPage = () => {
  const router = useRouter(); // Initialize router for navigation
  const translateX = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current; // Animation for border pulse

  const [colorIndex, setColorIndex] = useState(0);
  const colors = ['rgba(255, 100, 100, 0.3)', 'rgba(255, 165, 0, 0.3)', 'rgba(100, 255, 100, 0.3)']; // Light, semi-transparent colors

  useEffect(() => {
    // Start infinite left and right animation for the background image
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateX, {
          toValue: -width * 4.3,
          duration: 20000,
          useNativeDriver: true,
        }),
        Animated.timing(translateX, {
          toValue: 0,
          duration: 20000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [translateX]);

  // Cycle overlay background color every second
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000); // Change color every second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Border pulse animation
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.3, // Enlarge border
          duration: 4000, // Time to pulse
          useNativeDriver: false,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1, // Return to original size
          duration: 4000, // Time to shrink back
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, [pulseAnim]);

  // Example Supabase fetch effect
  useEffect(() => {
    const fetchData = async () => {
      try {
        let { data, error } = await supabase.from('your_table_name').select('*');
        if (error) {
          console.error('Error fetching data from Supabase:', error);
        } else {
          console.log('Data fetched from Supabase:', data);
        }
      } catch (error) {
        console.error('Supabase connection error:', error);
      }
    };

    fetchData();
  }, []); // Runs once when the component mounts

  return (
    <View style={styles.container}>
      {/* Animated background image */}
      <Animated.View style={[styles.fullScreenWrapper, { transform: [{ translateX }] }]}>
        <ImageBackground
          source={require('../assets/background1.png')} // Replace with your background image
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          {/* Light color overlay */}
          <View style={[styles.overlay, { backgroundColor: colors[colorIndex] }]} />
        </ImageBackground>
      </Animated.View>

      {/* Overlay content */}
      <View style={styles.overlayContent}>
        {/* Centered Logo */}
        <View style={styles.logoContainer}>
          <Image source={require('../assets/bell_halarmaS2.png')} style={styles.bellImage} />
        </View>

        {/* Description */}
        <View style={styles.textContainer}>
          <Text style={styles.description}>
            
          </Text>
        </View>

        {/* Button with border pulse animation */}
        <View style={buttonStyles.buttonContainer}>
          <Animated.View style={[buttonStyles.pulseBorder, { transform: [{ scale: pulseAnim }] }]}>
            <TouchableOpacity style={buttonStyles.button} onPress={() => router.push('/NextScreen')}>
              <Text style={buttonStyles.buttonText}>START HERE</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default FirstPage;
