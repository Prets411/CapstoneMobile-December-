import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useRouter } from 'expo-router'; // Import useRouter for navigation
import styles from '../assets/styles/AlertWheelStyles'; // Adjust the path as necessary

const AlertWheelColor = () => {
  const router = useRouter(); // Initialize the router

  return (
    <View style={styles.container}>
      {/* Title Section */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Alerts Wheel Color Legend</Text>
        <View style={styles.separator} />
      </View>

      {/* Legend Section */}
      <ScrollView contentContainerStyle={styles.legendContainer}>
        <View style={styles.alertItem}>
          <Icon name="bell" size={40} color="#e74c3c" style={styles.alertIcon} />
          <View style={styles.alertText}>
            <Text style={styles.alertTitle}>RED</Text>
            <Text style={styles.alertDescription}>
              Represents Critical Alerts. Urgent danger requiring immediate action like earthquakes or severe storms.
            </Text>
          </View>
        </View>

        <View style={styles.alertItem}>
          <Icon name="bell" size={40} color="#e67e22" style={styles.alertIcon} />
          <View style={styles.alertText}>
            <Text style={styles.alertTitle}>ORANGE</Text>
            <Text style={styles.alertDescription}>
              Represents High Alerts. Significant threats or emergencies that require attention, such as evacuation notices.
            </Text>
          </View>
        </View>

        <View style={styles.alertItem}>
          <Icon name="bell" size={40} color="#f1c40f" style={styles.alertIcon} />
          <View style={styles.alertText}>
            <Text style={styles.alertTitle}>YELLOW</Text>
            <Text style={styles.alertDescription}>
              Represents Moderate Alerts. Situations with potential risks that require caution, like weather advisories.
            </Text>
          </View>
        </View>

        <View style={styles.alertItem}>
          <Icon name="bell" size={40} color="#e67e22" style={styles.alertIcon} />
          <View style={styles.alertText}>
            <Text style={styles.alertTitle}>ORANGE</Text>
            <Text style={styles.alertDescription}>
              Represents High Alerts. Significant threats or emergencies that require attention, such as evacuation notices.
            </Text>
          </View>
        </View>

        <View style={styles.alertItem}>
          <Icon name="bell" size={40} color="#3498db" style={styles.alertIcon} />
          <View style={styles.alertText}>
            <Text style={styles.alertTitle}>BLUE</Text>
            <Text style={styles.alertDescription}>
              Represents Informational Alerts. Non-emergency notices like community events or service announcements.
            </Text>
          </View>
        </View>
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

export default AlertWheelColor;
