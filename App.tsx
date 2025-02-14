import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider as InversifyProvider} from 'inversify-react';
import {Provider as ReduxProvider} from 'react-redux';

import {container} from './src/di/inversify.config';
import SplashScreen from './src/screens/SplashScreen';
import AuthScreen from './src/screens/AuthScreen';
import MainScreen from './src/screens/MainScreen';
import AllTeamsScreen from './src/screens/AllTeamsScreen';
import {store} from './src/store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ReduxProvider store={store}>
      <InversifyProvider container={container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
              name="Splash"
              component={SplashScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen name="Login" component={AuthScreen} />
            <Stack.Screen name="Main" component={MainScreen} />
            <Stack.Screen name="AllTeams" component={AllTeamsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </InversifyProvider>
    </ReduxProvider>
  );
}
