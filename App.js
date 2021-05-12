import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Welcome from './components/Welcome'
import Index from './components/Index'
import ShowCard from './components/ShowCard'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default class App {

  // const [cards, setcards] = useState([
    
  // ])

  // const getCards = () => {
  //   fetch('https://rws-cards-api.herokuapp.com/api/v1/cards')
  //   .then(resp => resp.json())
  //   .then(json => setcards({
  //     cards: json
  //   }))
  // }

  getCards() {
    return fetch('https://rws-cards-api.herokuapp.com/api/v1/cards')
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.cards;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // const Stack = createStackNavigator();

  render(){
    const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome}/>
        <Stack.Screen name="Index">
          {props => <Index {...props} cards={cards} />}
        </Stack.Screen>
        <Stack.Screen name="ShowCard" component={ShowCard}/>
          {/* {props => <ShowCard {...props} card={card} />}
        </Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>
    
  );}
}
