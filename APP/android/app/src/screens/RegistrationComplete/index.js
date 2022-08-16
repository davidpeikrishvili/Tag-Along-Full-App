import { View, Text, StyleSheet, ImageBackground} from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const RegistrationComplete= () => {
 const navigation = useNavigation();

 const onReturnPressed = () => {
        navigation.navigate('SignIn');
      };

  return (
    <ImageBackground source ={require('./../../../../../assets/images/BG.jpeg')} style ={styles.screen}>
    <View style={styles.root}>
    <Text style = {styles.title}> Registration Success!</Text>
      
       <CustomButton
       text= "Click to return to Login"
       onPress={onReturnPressed}
       />
    </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
screen:{
  width: '100%',
  height:'100%',
}
});

  

export default RegistrationComplete