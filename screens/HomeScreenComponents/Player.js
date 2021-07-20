import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Player = () => {
    return (
        <View style={styles.player}>
            <Text>Playing</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    player: {
        backgroundColor: 'white',
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})


export default Player
