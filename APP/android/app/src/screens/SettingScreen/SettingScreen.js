import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';

const SettingScreen = () => {
    const navigation = useNavigation();

    const OnUserPressed = () => {
        navigation.navigate('User');
    }
    
      return (
        <View>
           <Text style = {styles.title}>SettingScreen</Text>
    
        <CustomButton
        text = "Return to userScreen"
        onPress={OnUserPressed}/>
    
        </View>
      )
    }

const styles = StyleSheet.create({
    root:{
      alignItems: 'center',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'black',
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
  
export default SettingScreen