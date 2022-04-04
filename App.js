import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import Dados from './src/pages/Dados';
import Login from './src/pages/Login';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#1c3c94',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >

        {
          /*
            em todas as telas(pages) é injetado na props a função navigation()
          */
        }



        <Stack.Screen
          name="Home"
          component={Home}
          options={
            {
              title: 'Seja Bem-Vindo',
            }
          }
        />
        <Stack.Screen
          name="Dados"
          component={Dados}
          options={
            { title: "Dados do Amigo" }
          }
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={
            { title: "My Friends APP" }
          }
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;