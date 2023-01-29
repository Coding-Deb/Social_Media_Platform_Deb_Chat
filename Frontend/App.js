import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Screens/Login-Signup/LoginScreen';
import RegisterScreen from './Screens/Login-Signup/RegisterScreen';
import ChatScreen from './Screens/MainScreen/ChatScreen';
import HomeScreen from './Screens/MainScreen/HomeScreen';
import NotificationScreen from './Screens/MainScreen/NotificationScreen';
import PostScreen from './Screens/MainScreen/PostScreen';
import ProfileScreen from './Screens/MainScreen/ProfileScreen';
import SearchScreen from './Screens/MainScreen/SearchScreen';
import SettingScreen from './Screens/MainScreen/SettingScreen';
import MainChatScreen from './Screens/MainScreen/MainChatScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
        <Stack.Screen name='Login' component={LoginScreen} options={{ animation: 'slide_from_right' }} />
        <Stack.Screen name='Register' component={RegisterScreen} options={{ animation: 'slide_from_right' }} />
        <Stack.Screen name='Home' component={HomeScreen} options={{ animation: 'slide_from_bottom' }} page='Home'/>
        <Stack.Screen name='Search' component={SearchScreen} options={{ animation: 'slide_from_bottom' }} page='Search'/>
        <Stack.Screen name='Chat' component={ChatScreen} options={{ animation: 'slide_from_right' }} />
        <Stack.Screen name='Notification' component={NotificationScreen} options={{ animation: 'slide_from_right' }} page='Notification'/>
        <Stack.Screen name='Profile' component={ProfileScreen} options={{ animation: 'slide_from_left' }} page='Profile'/>
        <Stack.Screen name='Post' component={PostScreen} options={{ animation: 'slide_from_bottom' }} page='Post'/>
        <Stack.Screen name='Setting' component={SettingScreen} options={{ animation: 'slide_from_right' }} page='Setting'/>
        <Stack.Screen name='Main_Chat' component={MainChatScreen} options={{ animation: 'slide_from_right' }} />
      </Stack.Navigator>
    </NavigationContainer>
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
