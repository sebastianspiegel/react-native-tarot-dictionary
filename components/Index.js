import React from 'react'
import {Text, View, Button, StyleSheet, FlatList} from 'react-native'
import ListCard from './ListCard'

const Index = React.memo(function Index({navigation, cards}) {

    return(
        <View style={styles.container}>
            <Button title="Go to Home" onPress={() => navigation.navigate('Welcome')} />
            <FlatList 
                data={cards}
                renderItem={({item}) => (
                    <ListCard card={item} keyExtractor={item => item.index_id.toString()}/>
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