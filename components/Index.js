import React from 'react'
import {Text, View, Button, StyleSheet, FlatList} from 'react-native'
import ListCard from './ListCard'

const Index = React.memo(function Index(props) {
    return(
        <View style={styles.container}>
            <FlatList 
                data={props.cards}
                renderItem={({item}) => (
                    <ListCard card={item}/>
                )}/>
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
    },
});

export default Index 