import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Welcome from './components/Welcome'
import Index from './components/Index'
import ShowCard from './components/ShowCard'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default class App extends React.Component {

  // const [cards, setcards] = useState([
    
  // ])

  state = {
    cards: [],
    loading: true
  }

  getCards(){
    fetch('https://rws-cards-api.herokuapp.com/api/v1/cards')
    .then(resp => resp.json())
    .then(json => this.setState({
      cards: json.cards,
      loading: false 
    }))
    .then(() => {
      console.log(this.state.loading)
    })
  }

  componentDidMount(){
    this.getCards()
  }

  // const Stack = createStackNavigator();

  render(){
    const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome}/>
        <Stack.Screen name="Index">
          {props => <Index {...props} cards={this.state.cards} />}
        </Stack.Screen>
        <Stack.Screen name="ShowCard" component={ShowCard}/>
          {/* {props => <ShowCard {...props} card={card} />}
        </Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>
    
  );}
}
