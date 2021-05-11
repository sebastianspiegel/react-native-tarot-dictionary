import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Welcome from './components/Welcome'
import Index from './components/Index'


export default function App() {

  const [cards, setcards] = useState([
    {
      id: 1,
      title: "Page of Wands",
      description: "Blah blah blah"
    },
    {
      id: 2,
      title: "Two of Wands",
      description: "Blah blah blah"
    },
    {
      id: 3,
      title: "Three of Wands",
      description: "Blah blah blah"
    },
    {
      id: 4,
      title: "Four of Wands",
      description: "Blah blah blah"
    },
    {
      id: 5,
      title: "Five of Wands",
      description: "Blah blah blah"
    }
  ])

  return (
    <Welcome />
    // <Index />
  );
}
