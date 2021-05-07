import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen name="Index" component={Index} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Tarot Dictionary</Text>
      <Button color="white"
        onPress={() => {
          navigation.navigate('Index')
        }}
        title="Start"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Index</Text>
    </View>
  )
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
