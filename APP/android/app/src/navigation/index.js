import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPassword from '../screens/ForgotPassword';
import RegistrationComplete from '../screens/RegistrationComplete';
import EmailConfirmation from '../screens/EmailConfirmation';
import MapScreen from '../screens/MapScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import SettingScreen from '../screens/SettingScreen';
import EditProfileScreen from '../screens/EditProfileScreen/EditProfileScreen';
import MatchedUsersScreen from '../screens/MatchedUsersScreen';
import FriendListScreen from '../screens/FriendListScreen';

const Stack = createNativeStackNavigator();



const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{headerShown:false}}>
         <Stack.Screen name= "SignIn" component={SignInScreen}/>
        <Stack.Screen name= "SignUp" component={SignUpScreen}/>
        <Stack.Screen name= "Register" component={RegistrationComplete}/>
        <Stack.Screen name= "Forgot" component={ForgotPassword}/>
        <Stack.Screen name= "Email" component={EmailConfirmation}/>
        <Stack.Screen name= "Map" component={MapScreen}/>
        <Stack.Screen name= "User" component={UserProfileScreen}/>
        <Stack.Screen name= "Friend" component={FriendListScreen}/>
        <Stack.Screen name= "Setting" component={SettingScreen}/>
        <Stack.Screen name= "Edit" component={EditProfileScreen}/>
        <Stack.Screen name= "Matches" component={MatchedUsersScreen}/>

        
        </Stack.Navigator>
    </NavigationContainer>
  );
};


export default Navigation