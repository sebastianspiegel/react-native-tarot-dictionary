import React from 'react'
import {Text, View, Button, StyleSheet} from 'react-native'

const Welcome = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to the Tarot Dictionary</Text>
        <Button color="white"
          onPress={() => {
            console.log('pressed')
          }}
          title="Start"
        />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 30,
    },
});

export default Welcome