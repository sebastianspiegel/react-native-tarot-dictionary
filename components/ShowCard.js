import React from 'react'
import {Text, View, Button, StyleSheet} from 'react-native'

const ShowCard = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.textTitle}>{props.card.title}</Text>
            <Text style={styles.textDes}>{props.card.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textDes : {
        color: 'white',
        fontSize: 20,
    },
    textTitle: {
        color: 'white',
        fontSize: 40,
    },
});

export default ShowCard 