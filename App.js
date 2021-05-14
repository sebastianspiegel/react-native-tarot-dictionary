import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Welcome from './components/Welcome'
import Index from './components/Index'
import ShowCard from './components/ShowCard'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function App() {

  const [cards, setcards] = useState([
    
  ])

  // state = {
  //   cards: [],
  //   loading: true
  // }

  const getCards = () => {
    fetch('https://rws-cards-api.herokuapp.com/api/v1/cards')
    .then(resp => resp.json())
    .then(json => setcards({
      cards: json.cards
    }))
    // .then(() => {
    //   console.log(cards)
    // })
  }

  // const Stack = createStackNavigator();

  // render(){
    const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" >
          {props => <Welcome {...props} getCards={getCards} />}
        </Stack.Screen>
        <Stack.Screen name="Index">
          {props => <Index {...props} cards={cards} />}
        </Stack.Screen>
        <Stack.Screen name="ShowCard" component={ShowCard}/>
          {/* {props => <ShowCard {...props} card={card} />}
        </Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
