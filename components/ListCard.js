import React from 'react'
import {Text, View, Button, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native'

const ListCard = React.memo(function ListCard({navigation, card}) {

    const handlePress = () => {
        console.log(card.title)
        navigation.navigate('Welcome')
    }

    return (
      <SafeAreaView style={styles.container}>
          <TouchableOpacity onPress={handlePress}>
              <Text style={styles.textTitle}>{card.title}</Text>
          </TouchableOpacity>
          {/* <Text style={styles.textDes}>{card.description}</Text> */}
      </SafeAreaView>
    );
})

const styles = StyleSheet.create({
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