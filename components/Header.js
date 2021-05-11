import React from 'react'
import {Text, View, Button, StyleSheet} from 'react-native'

const Header = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Header</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
    }
});

export default Header 