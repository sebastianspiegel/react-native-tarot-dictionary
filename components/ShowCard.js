import React from 'react'
import {Text, View, Button, StyleSheet} from 'react-native'

const ShowCard = ({route, navigation}) => {

    const { cardId } = route.params;
    
    //fetch card and set in state

    return(
        <View style={styles.container}>
            <Text style={styles.textTitle}>{card.title}</Text>
            <Text style={styles.textDes}>{card.description}</Text>
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