import {View, StyleSheet, TextInput} from 'react-native';
import {EplButton} from '../widgets/EplButton';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {saveUser} from '../manager/cacheManager';
import {Text} from 'react-native-gesture-handler';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
};

const AuthScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [messageError, setMessageError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

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
        <Text style={styles.messageError}>{messageError}</Text>
      </View>
      <View>
        <EplButton
          isLoading={loading}
          width={200}
          disabled={loading}
          title="Login"
          onPress={() => {
            setLoading(true);
            const timeout = setTimeout(async () => {
              const result: boolean = await saveUser({
                id: 1,
                email: 'sejomma@gmail.com',
                token: '28a33dc5-4930-4938-918d-37a09e4f7a64',
                username: 'JOMMAA',
              });

              if (result) {
                navigation.replace('Main');
              }
              setLoading(false);
            }, 2000);
          }}></EplButton>
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
