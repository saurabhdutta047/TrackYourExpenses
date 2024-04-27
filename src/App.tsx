import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import Onboarding from './screens/Onboarding';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';

export type RootStackParamsList = {
  Onboarding: undefined,
  Login: undefined,
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App