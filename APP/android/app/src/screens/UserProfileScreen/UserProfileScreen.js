import React, {useEffect, useState} from 'react';
import World from '../../../../../assets/images/world.png';
import Settings from '../../../../../assets/images/Settings.png';
import Friend from '../../../../../assets/images/Friend.png';
import Logout from '../../../../../assets/images/logout.png';
import { Text, View, Image, ImageBackground, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { style } from '@mui/system';

const backend_url = "https://tag-along-backend-pg9zg.ondigitalocean.app/api";

const UserProfileScreen = ({route}) => {
  const [userData, setUserData] = useState({});
  const isFocused = useIsFocused();

  useEffect(() => {
    fetch(`${backend_url}/${route.params.username}`, {
      method: 'GET',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
  
      .then((response) => response.json())
      .then(data => {
          setUserData(data);
          //console.log("Matched user: ",data['MatchedUser']);
      })
      .catch((error) => {
          console.error(error);
      });
      console.log(userData);
  },[isFocused])

const navigation = useNavigation();
console.log(route.params.username);
const worldPressed = () => {
  //Enables user upon button press to traverse to Create an account screen
  profile = userData;
  profile["SignedIn"] = true;;
  fetch(`${backend_url}/update/${route.params.username}`, {
    method: 'PUT',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(profile),
  })

    .then((response) => response.json())
    
    .then(data => {
        if (!data['detail']) {
            console.log(data);
            setUserData(data);
        }
        else {
            console.log(data['detail']);
        }
    })
    
    .catch((error) => {
        console.error(error);
    })
  navigation.navigate('Map', {username: route.params.username});
};
const settingsPressed = () => {
    //Enables user upon button press to traverse to Create an account screen
  navigation.navigate("Edit", {username: route.params.username});
  };

const friendPressed = () => {
    //Enables user upon button press to traverse to Create an account screen
  navigation.navigate('Friend');
  };

  const logoutPressed = () => {
    //Enables user upon button press to traverse to Create an account screen
    profile = userData;
    profile["SignedIn"] = false;
    profile["MatchedUser"] = route.params.username;
    profile['Matched'] = false;
    profile["InterestedLat"] = 0.0;
    profile["InterestedLong"] = 0.0;
    console.log(profile);
    fetch(`${backend_url}/update/${route.params.username}`, {
      method: 'PUT',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(profile),
    })

      .then((response) => response.json())
      
      .then(data => {
          if (!data['detail']) {
              console.log(data);
              navigation.navigate('SignIn');
          }
          else {
              console.log(data['detail']);
          }
      })
      
      .catch((error) => {
          console.error(error);
      })

  };
  if (!userData["Matched"]) {
    return (
      <ImageBackground source ={require('./../../../../../assets/images/UserProfile.png')} style ={styles.screen}>
      <View style={styles.root}>
      <Text style = {styles.title}>Welcome, {route.params.username}!</Text>
      <TouchableWithoutFeedback
          onPress={worldPressed}>
        <Image 
        source={World} 

        style={[styles.world]}
        resizeMode="contain" 
        />
    </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={settingsPressed}>
        <Image 
        source={Settings} 
        style={[styles.Settings]}
        resizeMode="contain" 
        />
    </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={friendPressed}>
        <Image 
        source={Friend} 
        style={[styles.Friend]}
        resizeMode="contain" 
        />
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={logoutPressed}>
        <Image 
        source={Logout} 
        style={[styles.logout]}
        resizeMode="contain" 
        />
        </TouchableWithoutFeedback>

        
        
      
      </View>
  </ImageBackground>
    );
  }
  else {
    return (
      <ImageBackground source ={require('./../../../../../assets/images/UserProfile.png')} style ={styles.screen}>
      <View style={styles.root}>
      <Text style = {styles.title}>Welcome, {route.params.username}!</Text>
      <Text style = {styles.match}>You've matched with {userData["MatchedUser"]}.</Text>
      <Text style = {styles.subtitle}>You're meeting them at {route.params.location}.</Text>
      <TouchableWithoutFeedback
          onPress={worldPressed}>
        <Image 
        source={World} 

        style={[styles.world]}
        resizeMode="contain" 
        />
    </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={settingsPressed}>
        <Image 
        source={Settings} 
        style={[styles.Settings]}
        resizeMode="contain" 
        />
    </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={friendPressed}>
        <Image 
        source={Friend} 
        style={[styles.Friend]}
        resizeMode="contain" 
        />
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={logoutPressed}>
        <Image 
        source={Logout} 
        style={[styles.logout]}
        resizeMode="contain" 
        />
        </TouchableWithoutFeedback>

        
        
      
      </View>
  </ImageBackground>
    );

  }
};


//Allows user to Customize visual elements of the signin Screen
const styles = StyleSheet.create({
  world: {
    maxHeight:75,
    right:-125,
    bottom: -655,
 },
 Settings:{
  maxWidth: 75,
    right: -300,
    bottom: -575,
 },
Friend:{
  maxWidth: 100,
  bottom: -333
},
logout:{
maxWidth: 90,
top:-680,
right:-300
},
screen:{
  width: '100%',
  height:'100%',
},
title:{
  fontSize:24,
  fontStyle:'italic',
  fontWeight:'bold',
  textAlign:'center',
  color:'#FFFFFF',
  top:175
},
match:{
  fontSize:20,
  fontStyle:'italic',
  fontWeight:'bold',
  textAlign:'center',
  color:'#FFFFFF',
  top:200
},

image: {
  flex: 1,
  width : 300,
  height:  100,
  alignSelf: "center",
  borderColor:"#FFFFFF",
  borderWidth: 2,
  top: 225
},
subtitle:{
  fontSize:20,
  fontStyle:'italic',
  fontWeight:'bold',
  textAlign:'center',
  color:'#FFFFFF',
  top:200
},



});

export default UserProfileScreen; 

