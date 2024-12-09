import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useRouter } from 'expo-router'; // Import useRouter for navigation
import styles from '../assets/styles/HistoryStyles'; // Import the separated styles

const History = () => {
  const router = useRouter(); // Initialize the router

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>HISTORY</Text>

      {/* Incident History List */}
      <ScrollView contentContainerStyle={styles.historyContainer}>
        {/* Incident Card Items */}
        <View style={styles.incidentCard}>
          <Text style={styles.incidentText}>Description of Incident: Broken Garbage Bin</Text>
          <Text style={styles.incidentText}>Location: Canteen</Text>
          <Text style={styles.incidentText}>Time & Date: 03/26/2024</Text>
          <Text style={styles.statusOpen}>Status of Report: Open</Text>
        </View>

        <View style={styles.incidentCard}>
          <Text style={styles.incidentText}>Description of Incident: Water pipe burst</Text>
          <Text style={styles.incidentText}>Location: Library</Text>
          <Text style={styles.incidentText}>Time & Date: 03/25/2024</Text>
          <Text style={styles.statusInProgress}>Status of Report: In progress</Text>
        </View>

        <View style={styles.incidentCard}>
          <Text style={styles.incidentText}>Description of Incident: Minor Gas Leak</Text>
          <Text style={styles.incidentText}>Location: CNAHS building</Text>
          <Text style={styles.incidentText}>Time & Date: 03/24/2024</Text>
          <Text style={styles.statusResolved}>Status of Report: Resolved</Text>
        </View>

        <View style={styles.incidentCard}>
          <Text style={styles.incidentText}>Description of Incident: Small fire in Lab</Text>
          <Text style={styles.incidentText}>Location: CCJC building</Text>
          <Text style={styles.incidentText}>Time & Date: 03/22/2024</Text>
          <Text style={styles.statusResolved}>Status of Report: Resolved</Text>
        </View>

        <View style={styles.incidentCard}>
          <Text style={styles.incidentText}>Description of Incident: Broken Window</Text>
          <Text style={styles.incidentText}>Location: CAFA building</Text>
          <Text style={styles.incidentText}>Time & Date: 03/19/2024</Text>
          <Text style={styles.statusResolved}>Status of Report: Resolved</Text>
        </View>
      </ScrollView>

      {/* "Report Again" Button */}
      <TouchableOpacity 
        style={styles.reportButton} 
        onPress={() => router.push('/IncidentReport')}
      >
        <Text style={styles.reportButtonText}>Report Again</Text>
      </TouchableOpacity>

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

export default History;
