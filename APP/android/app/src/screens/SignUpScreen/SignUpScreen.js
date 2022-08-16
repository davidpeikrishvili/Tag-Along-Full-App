import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

const navigation = useNavigation();

const url = "https://tag-along-backend-pg9zg.ondigitalocean.app/api"

const onRegisterPressed = () => {
  //Enables user upon button press to traverse to EmailConfirmationScreen
  setErrorMessage('');
  if ((password === '') || (username === '') || (email === ''))
    setErrorMessage("All fields are required.");
  else {
    if(password === passwordRepeat) {
      fetch(`${url}/create`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Username: username,
          Email: email,
          Password: password,
        }),
      })

        .then((response) => response.json())
        .then(data => {
            if (!data['detail']) {
                console.log(data);
                if (data['Password'] === ["This field is required."])
                  setErrorMessage("Password is required.");
                else if (data['Username'] === ["This field is required."])
                  setErrorMessage("Username is required.");
                else if (data['Username'] === ["user with this Username already exists."])
                  setErrorMessage("This Username is already in use.");
                else 
                  navigation.navigate('Email');
            }
            else {
                setErrorMessage(data['detail']);
            }
        })
        .catch((error) => {
            console.error(error);
        })
    }
    else
      setErrorMessage("Entered passwords don't match.");
  }
};

const onSignInPress = () => {
  //Enables user upon button press to traverse to Login Screen
  navigation.navigate('SignIn');
};
const onForgotPasswordPressed = () => {
  //Enables user upon button press to traverse to Forgot Password Screen
  navigation.navigate('Forgot');
}

  return (
    <ImageBackground source ={require('./../../../../../assets/images/BG.jpeg')} style ={styles.screen}>

    <ScrollView showsHorizontalScrollIndicator={false}>

    <View style={styles.root}>


    <Text style = {styles.title}> Create an Account</Text>


      <CustomInput 
      placeholder = "Username" 
      value={username} 
      setValue={setUsername} 
      />
        <CustomInput 
      placeholder = "Email" 
      value={email} 
      setValue={setEmail} 
      />
      <CustomInput 
      placeholder = "Password" 
      value={password} 
      setValue={setPassword} 
      secureTextEntry
      />
       <CustomInput 
      placeholder = "Re-enter Password" 
      value={passwordRepeat} 
      setValue={setPasswordRepeat} 
      secureTextEntry
      />

      <CustomButton
       text= "Register"
        onPress={onRegisterPressed}
        />

      {errorMessage !== '' && (
        <Text style = {{color: 'red'}}> {errorMessage} </Text>
      )}

      <CustomButton
       text= "Whoops, you only forgot Your Password? "
       onPress={onForgotPasswordPressed}
       type="SECONDARY"
       />
          <CustomButton
       text= "Have an Account? Sign in"
       onPress={onSignInPress}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    margin: 10,
  },
  joke:{
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    margin: 10,
  },
  screen:{
    width: '100%',
    height: '100%',
  }
});

export default SignUpScreen