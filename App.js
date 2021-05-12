import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Welcome from './components/Welcome'
import Index from './components/Index'
import ShowCard from './components/ShowCard'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function App() {

  const [cards, setcards] = useState([
    {
      id: 1,
      title: "Ace of Wands",
      description: "Creation, invention, enterprise, the powers which result in these; principle, beginning, source; birth, family, origin, and in a sense the virility which is behind them; the starting point of enterprises; according to another account, money, fortune, inheritance."
    },
    {
      id: 2,
      title: "Two of Wands",
      description: "Between the alternative readings there is no marriage possible; on the one hand, riches, fortune, magnificence; on the other, physical suffering, disease, chagrin, sadness, mortification. The design gives one suggestion; here is a lord overlooking his dominion and alternately contemplating a globe; it looks like the malady, the mortification, the sadness of Alexander amidst the grandeur of this world's wealth."
    },
    {
      id: 3,
      title: "Three of Wands",
      description: "He symbolizes established strength, enterprise, effort, trade, commerce, discovery; those are his ships, bearing his merchandise, which are sailing over the sea. The card also signifies able co-operation in business, as if the successful merchant prince were looking from his side towards yours with a view to help you."
    },
    {
      id: 4,
      title: "Four of Wands",
      description: "They are for once almost on the surface--country life, haven of refuge, a species of domestic harvest-home, repose, concord, harmony, prosperity, peace, and the perfected work of these."
    },
    {
      id: 5,
      title: "Five of Wands",
      description: "Imitation, as, for example, sham fight, but also the strenuous competition and struggle of the search after riches and fortune. In this sense it connects with the battle of life. Hence some attributions say that it is a card of gold, gain, opulence."
    }
  ])

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
    
  );
}
