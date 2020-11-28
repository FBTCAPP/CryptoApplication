import React from 'react';
import { StyleSheet, Text, View, StatusBar,ScrollView  } from 'react-native';
import KriptoList from './src/components/KriptoList';
import NaviBar from './src/components/NaviBar';

export default function App() {
  return (
    <View >
      <StatusBar style="auto"/>
        <ScrollView persistentScrollbar={true}>
            <NaviBar/>
            <KriptoList/>
        </ScrollView>
    </View>
  );
}