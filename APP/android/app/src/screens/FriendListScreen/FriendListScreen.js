import {
  Text,
  TextInput,
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  ImageBackground,
  Platform,
  TouchableOpacity,
  Keyboard,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import FriendTab from '../../components/FriendTab';

const FriendListScreen = () => {
  const navigation = useNavigation();

  const [friendTab, setFriendTab] = useState();
  const [friendItems, setFriendItems] = useState([]);

  const OnUserPressed = () => {
    navigation.navigate('User');
  };

  const handleAddFriend = () => {
    Keyboard.dismiss();
    setFriendItems([...friendItems, friendTab]);
    setFriendTab(null);
  };

  const deleteFriend = index => {
    let itemsCopy = [...friendItems];
    itemsCopy.splice(index, 1);
    setFriendItems(itemsCopy);
  };

  const choiceAlert = index =>
    Alert.alert(
      'What you would like to do with this friend?',
      'Choose an option from below: ',
      [
        {
          text: 'Delete This Friend',
          onPress: () => deleteFriend(index),
          style: 'delete',
        },
        {
          text: 'Find place to meet up (You will be redirected to The Map)',
          onPress: () => navigation.navigate('Map'),
        },
        {text: 'Dismiss', onPress: () => console.log('Pop-up dismissed.')},
      ],
    );

  return (
    <ImageBackground
      source={require('./../../../../../assets/images/friendslistbackground.png')}
      style={styles.screen}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>FriendListScreen</Text>

          <CustomButton text="Return to userScreen" onPress={OnUserPressed} />

          <View style={styles.items}>
            {/* This is where the friends will go! */}
            {friendItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => choiceAlert(index)}>
                  <FriendTab text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>

        {/* Type out a friend's username */}
        <KeyboardAvoidingView
          behavior={Platform.OS === ('ios' || 'android') ? 'padding' : 'height'}
          style={styles.writeTaskWrapper}>
          <TextInput
            style={styles.input}
            placeholder={"Type in a friend's username: "}
            value={friendTab}
            onChangeText={text => setFriendTab(text)}
          />

          <TouchableOpacity onPress={() => handleAddFriend()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
};

//Allows user to Customize visual elements of the create an account screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    source: './../../../../../assets/images/friendslistbackground.png',
    color: '#F00',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {
    fontSize: 30,
  },
  screen: {
    width: '100%',
    height: '100%',
  },
});

export default FriendListScreen;