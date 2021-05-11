import React from 'react'
import {Text, View, Button, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native'

const ListCard = ({card}) => {
    return (
      <SafeAreaView style={styles.container}>
          <TouchableOpacity onPress={console.log('pressed')}>
              <Text style={styles.textTitle}>{card.title}</Text>
          </TouchableOpacity>
          <Text style={styles.textDes}>{card.description}</Text>
      </SafeAreaView>
    );
}

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