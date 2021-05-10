import React from 'react'
import {Text, View, Button, StyleSheet, FlatList} from 'react-native'
import ListCard from './components/ListCard'

const Index = (props) => {
    return(
        <View style={styles.container}>
            <FlatList 
                data={props.cards}
                renderItem={({card}) => (
                    <ListCard />
                )}/>
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
    text: {
        color: 'white',
    },
});

export default Index 