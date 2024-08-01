import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import Login from './src/screens/LoginScreen';
import Cadastro from './src/screens/CadastroScreens';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
      return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='login' component={Login} options={{headerShown: false}}/>
          <Stack.Screen name='cadastro' component={Cadastro} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default App;
