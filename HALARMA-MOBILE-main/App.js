import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { supabase } from './app/lib/supabaseClient';
import { useEffect } from 'react';

export default function App() {
  const [userId, setUserId] = useState('');
  const [media, setMedia] = useState([]);

  const getUser = async () => {

    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (user !== null) {
        setUserId(user.id);
      } else {
        setUserId('');
      }
    } catch (e) {
    }

  }

  async function uploadImage(e) {
    let file = e.target.files[0];

    const { data, error } = await supabase
      .storage
      .from('IMAGES')
      .upload(userId + "/" + uuidv4(), file)

    if (data) {
      getMedia();

    } else {
      console.log(error);
    }
  }

  async function getMedia() {

    const { data, error } = await supabase.storage.from('uploads').list(userId + '/', {
      limit: 10,
      offset: 0,
      sortBy: {
        column: 'name', order:
          'asc'
      }
    });

    if (data) {
      setMedia(data);
    } else {
      console.log(71, error);
    }
  }

  useEffect(() =>{
    getUser();
    getMedia();
  } ,[userId])

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
