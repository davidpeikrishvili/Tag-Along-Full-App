import React, { useState, useEffect} from 'react';
import {Button, View, Text, Image, ImageBackground, StyleSheet, ScrollView, useWindowDimensions} from 'react-native';
import Logo from '../../../../../assets/images/Tag_Along.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useIsFocused,useNavigation } from '@react-navigation/native';

const url = "https://tag-along-backend-pg9zg.ondigitalocean.app/api"

//const{height} = useWindowDimensions();

const MatchedUsersScreen = ({route}) => {
  const [username, setUsername] = useState(route.params.username);
  const [matches, setMatches] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [userData, setUserData] = useState({});
  const [matchedUsername, setMatchedUsername] = useState(route.params.username);
  const [matched, setMatched] = useState(false);

  const navigation = useNavigation();
  const isFocused = useIsFocused();
  
  useEffect(() => {
    fetch(`${url}/${username}`, {
      method: 'GET',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
  
      .then((response) => response.json())
      .then(data => {
          setMatched(data["Matched"]);
          setUserData(data);
          //console.log("Matched user: ",data['MatchedUser']);
      })
      .catch((error) => {
          console.error(error);
      });
  },[isFocused])
  
  useEffect(() => {
    if (matched !== true) {
      console.log("Username: ",username);
      fetch(`${url}/${username}`, {
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
        .then(thirdGet = true)
        .catch((error) => {
            console.error(error);
        });
        timer1 = setInterval(() => GetMatches(username), 2500);
        timer2 = setInterval(() => CheckMatch(username, matchedUsername), 5000);
    }
      
  }, [matchedUsername]);

  useEffect(() => {
    if (matched === true) {
      profile = userData;
      profile["Matched"] = true;
        fetch(`${url}/update/${username}`, {
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
                  //this.props.navigation.navigate("Matches", {username: this.state.username});
              }
              else {
                  console.log(data['detail']);
              }
          })
          
          .catch((error) => {
              console.error(error);
          })
    }
  }, [matched]);
  
  const GetMatches = (username) => {
    fetch(`${url}/matches/${username}`, {
      method: 'GET',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
  
      .then((response) => response.json())
      .then(data => {
          setMatches(data['matches']);
      })
      .then(secondGet = true)
      .catch((error) => {
          console.error(error);
      });
  }

  const CheckMatch = (username, matchedUsername) => {
    if ((matchedUsername !== username)) {
      fetch(`${url}/${matchedUsername}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
      })
    
        .then((response) => response.json())
        .then(data => {
            if (data['MatchedUser'] === username)
              setMatched(true);
        })
        .catch((error) => {
            console.error(error);
        });
    }
  }


  const onMatchPress = (name) => {
    console.log("MatchPress: ",username, name);
    profile = userData;
    profile["MatchedUser"] = name;
      fetch(`${url}/update/${username}`, {
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
                setMatchedUsername(data['MatchedUser']);
                //this.props.navigation.navigate("Matches", {username: this.state.username});
            }
            else {
                console.log(data['detail']);
            }
        })
        
        .catch((error) => {
            console.error(error);
        })
  }
  //console.log("Matched? ", matched);
  if (matches.length === 0)
    return ( <ImageBackground source ={require('./../../../../../assets/images/BG.jpeg')} style={styles.screen}>
      <ScrollView showsHorizontalScrollIndicator={false}>
      <View>
        <Text style={styles.title}>No Matches :/</Text>
        </View>
        </ScrollView>
    </ImageBackground>);
  else if (matched === true)
      return ( <ImageBackground source ={require('./../../../../../assets/images/BG.jpeg')} style={styles.screen}>
      <ScrollView showsHorizontalScrollIndicator={false}>
      <View>
        <Text style={styles.title}>You've matched with {matchedUsername}!</Text>
        <Image style={styles.image} source={{uri:route.params.picture}}></Image>
        <Text style={styles.subtitle}>You're meeting them at {route.params.location}.</Text>
        <Button title="Home" onPress={() => navigation.navigate("User",{username: username, location: route.params.location})} color="#FF0000"/>
        </View>
        </ScrollView>
        </ImageBackground>);
  else {
    return (<ImageBackground source ={require('./../../../../../assets/images/BG.jpeg')} style={styles.screen}>
      {matches.map((user, index) =>{
      //console.log("Checking match: ",user, matchedUsername);
      if (user === matchedUsername)
        return(<View key = {index}>
          <Text style={styles.text}>{user}</Text>
          <Button title="Waiting..." color="#888888" />
        </View>)
      else
          return(<View key = {index}>
            <Text style={styles.text}>{user}</Text>
            <Button title="Match!" color="#FF0000" onPress={() => onMatchPress(user)} />
          </View>)
    })}
    </ImageBackground>)
  }
  
}

const styles = StyleSheet.create({
  screen:{
    width: '100%',
    height:'100%',
    alignItems: 'center'
  },
  text:{
    fontSize:20,
    fontStyle:'italic',
    fontWeight:'bold',
    textAlign:'center',
    color:'#FFFFFF'
  },
  title:{
    fontSize:32,
    fontStyle:'italic',
    fontWeight:'bold',
    textAlign:'center',
    color:'#FFFFFF',
    marginVertical: 25
  },
  subtitle:{
    fontSize:24,
    fontStyle:'italic',
    fontWeight:'bold',
    textAlign:'center',
    color:'#FFFFFF',
    marginVertical: 25
  },
  image: {
    flex: 1,
    width : 300,
    height:  100,
    alignSelf: "center",
    borderColor:"#FFFFFF",
    borderWidth: 2,
    marginVertical: 50
  },
})



/*
const MatchedUsersScreen = () => {
  return (
    <View>
      <Text>MatchedUsersScreen</Text>
    </View>
  )
}
*/

export default MatchedUsersScreen