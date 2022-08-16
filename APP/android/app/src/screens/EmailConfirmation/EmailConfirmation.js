import React, {useState} from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';


const EmailConfirmation = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

const navigation = useNavigation();

const onConfirmPressed = () => {
 navigation.navigate('Register');
};


  return (
    <ImageBackground source ={require('./../../../../../assets/images/BG.jpeg')} style ={styles.screen}>
    <ScrollView showsHorizontalScrollIndicator={false}>

    <View style={styles.root}>


    <Text style = {styles.title}>Confirm Your Email</Text>

        <CustomInput 
      placeholder = "Email" 
      value={email} 
      setValue={setEmail} 
      />

      <CustomButton
       text= "Confirm Email"
        onPress={onConfirmPressed}
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
    height: '100%',
 }
});

export default EmailConfirmation