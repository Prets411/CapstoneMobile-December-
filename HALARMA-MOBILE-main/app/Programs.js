// app/Programs.js
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, ActivityIndicator, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome5'; 
import styles from '../assets/styles/ProgramsStyles';
import { supabase } from './lib/supabaseClient';

const Programs = () => {
  const router = useRouter();
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from Supabase
  useEffect(() => {
    const fetchPrograms = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase.from('programs').select('*');
        if (error) {
          console.error('Error fetching programs:', error.message);
          setError('Error fetching programs. Please try again later.');
        } else {
          console.log('Fetched programs data:', data);
          setPrograms(data);
        }
      } catch (error) {
        console.error('Supabase fetch error:', error);
        setError('An unexpected error occurred. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  return (
    <View style={styles.container}>
      {/* Title Section */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Upcoming Programs & Events</Text>
        <Text style={styles.subtitle}>Stay Updated with the Latest Activities</Text>
        <View style={styles.separator} />
      </View>

      {/* Programs List */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : programs.length > 0 ? (
          programs.map((program) => (
            <View key={program.id} style={styles.card}>
              <Text style={styles.cardTitle}>{program.title}</Text>
              <Text style={styles.cardTime}>
                {program.created_at ? new Date(program.created_at).toLocaleString() : 'Unknown time'}
              </Text>
              <Text style={styles.cardDescription}>{program.what}</Text>
              {program.image && (
                <Image source={{ uri: program.image }} style={styles.cardImage} />
              )}
              {/* Add spacing after the image */}
              {program.forms && (
                <TouchableOpacity 
                  onPress={() => Linking.openURL(program.forms)} 
                  style={styles.linkContainer}
                >
                  <Text style={styles.cardLink}>Click here for more information</Text>
                </TouchableOpacity>
              )}
              <View style={styles.separator} />
            </View>
          ))
        ) : (
          <Text>No programs available</Text>
        )}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/Homepages')}>
          <Icon name="home" size={25} color="#333" style={styles.navIcon} />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/Notification')}>
          <Icon name="bell" size={25} color="#333" style={styles.navIcon} />
          <Text style={styles.navText}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/History')}>
          <Icon name="history" size={25} color="#333" style={styles.navIcon} />
          <Text style={styles.navText}>History</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/Profile')}>
          <Icon name="user" size={25} color="#333" style={styles.navIcon} />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Programs;
