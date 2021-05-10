import React from 'react'
import {Text, View, Button, StyleSheet} from 'react-native'

const ListCard = (props) => {
    return (
      <View>
          {console.log(props)}
          <Text style={styles.text}>{props.card.title}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 40
    },
});

export default ListCard