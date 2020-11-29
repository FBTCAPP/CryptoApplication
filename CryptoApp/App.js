import * as React from 'react';
import { StyleSheet, Text, View, StatusBar,ScrollView  } from 'react-native';
import Exchange from './pages/Exchange';
import NaviBar from './src/components/NaviBar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Kriptolar from './pages/KriptoPage'
import ExchangePage from './pages/Exchange'
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto"/>
      <NavigationContainer >
        <Stack.Navigator >
          <Stack.Screen name="KriptoList" component={Kriptolar} options={{headerShown: false}}/>
          <Stack.Screen name="ExchangeP" component={ExchangePage} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}