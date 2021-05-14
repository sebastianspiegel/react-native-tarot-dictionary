import React from 'react'
import {Text, View, Button, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native'

const ListCard = React.memo(function ListCard({card}) {

    // const handlePress = () => {
    //     console.log(card.title)
    //     navigation.navigate('ShowCard', {
    //         cardId: card.id
    //     })
    // }

    return (
      <SafeAreaView style={styles.container}>
          {console.log('card')}
          <Text>Hello</Text>
          <TouchableOpacity style={styles.card} onPress={console.log('pressed')}>
              <Text style={styles.textTitle}>{card.title}</Text>
          </TouchableOpacity>
          {/* <Text style={styles.textDes}>{card.description}</Text> */}
      </SafeAreaView>
    );
})

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'grey',
    },
    container: {
        flex: 2,
    },
    textDes: {
        color: 'white',
        fontSize: 20
    },
    textTitle: {
        color: 'white',
        fontSize: 40
    },
});

export default ListCard