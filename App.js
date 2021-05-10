import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Welcome from './components/Welcome'


export default function App() {
  return (
    <View>
      <Welcome />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
});
