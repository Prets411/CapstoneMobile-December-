// app/lib/TestSupabase.js

import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { createClient } from '@supabase/supabase-js';
import Constants from 'expo-constants';

// Create the Supabase client
const supabaseUrl = Constants.expoConfig.extra.supabaseUrl;
const supabaseAnonKey = Constants.expoConfig.extra.supabaseAnonKey;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const TestSupabase = () => {
  useEffect(() => {
    const testConnection = async () => {
      try {
        // Replace 'your_table_name' with the actual table name you want to test
        let { data, error } = await supabase.from('your_table_name').select('*');
        if (error) {
          console.error('Error fetching data:', error);
        } else {
          console.log('Data fetched successfully:', data);
        }
      } catch (error) {
        console.error('Connection test failed:', error);
      }
    };

    testConnection();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Check your console for the Supabase connection test results.</Text>
    </View>
  );
};

export default TestSupabase;
