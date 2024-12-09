import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Optionally set this to hide headers globally
        headerStyle: {
          backgroundColor: '#E0E1E0', // Header background color
        },
        headerTintColor: '#fff', // Header text color
        headerTitleStyle: {
          fontWeight: 'bold', // Header title styling
        },
      }}
    >
      {/* Index and other screens will be automatically detected */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="NextScreen" options={{ title: 'Next Screen' }} />
    </Stack>
  );
}
