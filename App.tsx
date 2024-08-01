import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import Login from './src/screens/LoginScreen';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  const navigation = useNavigation();
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='login' component={Login} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default App;
