
import React from 'react';
import { SafeAreaView, StyleSheet, ImageBackground} from 'react-native';
import SignInScreen from './android/app/src/screens/SignInScreen';
import SignUpScreen from './android/app/src/screens/SignUpScreen';
import Navigation from './android/app/src/navigation';
import ForgotPassword from './android/app/src/screens/ForgotPassword';
import RegistrationComplete from './android/app/src/screens/RegistrationComplete';
import MapScreen from './android/app/src/screens/MapScreen';

const App = () => {

  return (
    <SafeAreaView style={styles.root}>

    <Navigation/>
  
    </SafeAreaView>
    
    
  );
};


const styles = StyleSheet.create({
root:{
  flex: 1,
  width:400,
  height:undefined,
  resizeMode:'',
  },
container:{
  flex: 1,
  width:400,
  height:undefined,
  resizeMode:'',
}
});

export default App;
