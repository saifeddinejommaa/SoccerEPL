import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useEffect} from 'react';
import {View, Image, Text} from 'react-native';

type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
};

const SplashScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log('Navigating after 2 seconds');
      navigation.replace('Login');
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const exampleImage = require('../assets/soccer.jpg');
  return (
    <View>
      <Image source={exampleImage}></Image>
    </View>
  );
};

export default SplashScreen;
