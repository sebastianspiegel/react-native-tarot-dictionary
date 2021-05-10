import React from 'react'
import {Text, View, Button, StyleSheet, SafeAreaView} from 'react-native'

const ListCard = (props) => {
    return (
      <SafeAreaView style={styles.container}>
          {console.log(props)}
          <Text style={styles.textTitle}>{props.card.title}</Text>
          <Text style={styles.textDes}>{props.card.description}</Text>
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