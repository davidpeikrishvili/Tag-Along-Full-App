import React, {useState} from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, ScrollView, useWindowDimensions} from 'react-native';
import Logo from '../../../../../assets/images/Tag_Along.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const url = "https://tag-along-backend-pg9zg.ondigitalocean.app/api"

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

const{height} = useWindowDimensions();
const navigation = useNavigation();

const onSignInPressed = () => {
  //Enables user upon button press to traverse to HomeScreen
  setErrorMessage('');
  fetch(`${url}/${username}`, {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
  })

    .then((response) => response.json())
    .then(data => {
        if (!data['detail']) {
          console.log(data);
          if (data['Password'] === password)
            navigation.navigate("User", {username: username});
          else
            setErrorMessage("Wrong password.");
        }
        else {
          setErrorMessage("Username not found.");
        }
    })
    .catch((error) => {
        console.error(error);
    });
};

const onForgotPasswordPressed = () => {
  //Enables user upon button press to traverse to ForgotPasswordScreen
  navigation.navigate('Forgot');
};

const onSignUpPress = () => {
  //Enables user upon button press to traverse to Create an account screen
navigation.navigate('SignUp');
};

  return (
    <ImageBackground source ={require('./../../../../../assets/images/BG.jpeg')} style ={styles.screen}>
    <ScrollView showsHorizontalScrollIndicator={false}>

    <View style={styles.root}>

      <Image 
      source={Logo} 
      style={[styles.logo, 
      {height: height * 0.3}]} 
      resizeMode="contain" 
      />

      <CustomInput 
      placeholder = "Username" 
      value={username} 
      setValue={setUsername} 
      />
      
      <CustomInput 
      placeholder = "Password" 
      value={password} 
      setValue={setPassword} 
      secureTextEntry
      />

      <CustomButton
       text= "Sign In"
        onPress={onSignInPressed}
        />

      {errorMessage !== '' && (
        <Text style = {{color: 'red'}}> {errorMessage} </Text>
      )}

      <CustomButton
       text= "Forgot Your Password?" 
       onPress={onForgotPasswordPressed}
       type="SECONDARY"
       />

      <CustomButton
       text= "Create an Account" 
       onPress={onSignUpPress}
       type="SECONDARY"
       />
      
    </View>
    
    </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  root:{
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width:'70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  screen:{
    width: '100%',
    height:'100%',
  }
});

export default SignInScreen