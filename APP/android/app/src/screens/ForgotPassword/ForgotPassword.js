import { View, Text,StyleSheet, ScrollView, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import { useNavigation } from '@react-navigation/native';


const ForgotPassword = () => {
    
    const [username, setUsername] = useState('');
    const navigation = useNavigation();

    const onSendPressed = () =>{
      
    }

    const onSignInPressed = () =>{
        navigation.navigate('SignIn');
    }

  return (
    <ImageBackground source ={require('./../../../../../assets/images/BG.jpeg')} style ={styles.screen}>
    <ScrollView showsVerticalScrollIndicator ={false}>
         <View style={styles.root}>
      <Text style = {styles.title}>Reset Your Password</Text>
        <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
        />

        <CustomButton text= "Send"
         onPress={onSendPressed}
         />

         <CustomButton
         text="Back to Sign in"
         onPress={onSignInPressed}
         type = "SECONDARY"
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
  screen:{
  width: '100%',
  height:'100%',
  }
});

export default ForgotPassword