import {View, StyleSheet, TextInput} from 'react-native';
import {EplButton} from '../../widgets/EplButton';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {Text} from 'react-native-gesture-handler';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../store/slices/UserSlice';
import { AppDispatch, RootState } from '../store';

type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
};

const AuthScreen: React.FC = () => {

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const dispatch = useDispatch<AppDispatch>();

  const user = useSelector((state:RootState)=>state.user)

  useEffect(()=>{
    if(user.user != undefined){
      navigation.replace('AllTeams');
    }
  },[user])

  const authHandler = async () => {
    try {
      await dispatch(auth()); 
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}></View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Please enter your user name !"></TextInput>
        <TextInput
          style={styles.textInput}
          placeholder="password"
          secureTextEntry={true}></TextInput>
        <Text style={styles.messageError}>{user.errorMessage}</Text>
      </View>
      <View>
        <EplButton
          isLoading={user.loading}
          width={200}
          disabled={user.loading}
          title="Login"
          onPress={authHandler}></EplButton>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    borderColor: 'black',
    padding: 10,
    alignContent: 'flex-start',
  },

  textInput: {
    color: '#000000',
    borderColor: '#143D60',
    borderWidth: 2,
    borderRadius: 16,
    margin: 10,
    backgroundColor: '#DDDDDD',
  },

  messageError: {
    color: '#000000',
    marginTop: 10,
  },
});

export default AuthScreen;
