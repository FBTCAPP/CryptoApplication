import React from 'react';
import { StyleSheet, Text, View, StatusBar,ScrollView  } from 'react-native';
import Exchange from './pages/Exchange';
import KriptoList from './pages/Kriptolar';
import NaviBar from './src/components/NaviBar';

export default function App() {
  return (
    <View >
      <StatusBar style="auto"/>
        <ScrollView persistentScrollbar={true}>
            <NaviBar/>
            <Exchange/>
        </ScrollView>
    </View>
  );
}