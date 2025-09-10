import { Stack } from 'expo-router';
export default function Layout() {
  return (
    <Stack
      screenOptions={{
       // headerShown: false,
        statusBarStyle: 'inverted',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen name="home" options={{}} />
    </Stack>
  );
}