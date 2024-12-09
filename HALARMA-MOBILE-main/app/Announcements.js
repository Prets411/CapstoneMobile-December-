import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../assets/styles/AnnouncementsStyles';
import { supabase } from './lib/supabaseClient';

const Announcements = () => {
  const router = useRouter();
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        let { data, error } = await supabase.from('announcements').select('*');
        if (error) {
          console.error('Error fetching announcements:', error);
        } else {
          console.log('Fetched Announcement data:', data);
          setAnnouncements(data);
        }
      } catch (error) {
        console.error('Supabase fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  return (
    <View style={styles.container}>
      {/* Title Section */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>ANNOUNCEMENTS</Text>
        <Text style={styles.subtitle}>Stay Informed, Healthy, & Safe</Text>
        <View style={styles.separator} />
      </View>

      {/* Announcements List */}
      <ScrollView contentContainerStyle={styles.announcementContainer}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          announcements.length > 0 ? (
            announcements.map((announcement) => (
              <View key={announcement.id} style={styles.card}>
                <Text style={styles.announcementOffice}>MSEUF Health and Safety Office</Text>
                <Text style={styles.announcementTime}>
                  {announcement.created_at ? new Date(announcement.created_at).toLocaleString() : 'Unknown time'}
                </Text>
                <Text style={styles.announcementTitle}>{announcement.title}</Text>
                <Text style={styles.announcementText}>{announcement.content}</Text>
                {announcement.image && (
                  <Image source={{ uri: announcement.image }} style={styles.announcementImage} />
                )}
                {announcement.forms && (
                  <TouchableOpacity onPress={() => Linking.openURL(announcement.forms)} style={styles.linkContainer}>
                    <Text style={styles.announcementLink}>Click here for more information</Text>
                  </TouchableOpacity>
                )}
                <View style={styles.separator} />
              </View>
            ))
          ) : (
            <Text>No announcements available</Text>
          )
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

export default Announcements;
