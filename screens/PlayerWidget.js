import React from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'
import Player from './PlayerScreenComponents/Player';

const PlayerWidget = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> console.log("hi")}>
            <Text style={styles.text}>playing</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 65,
        flexDirection: 'row',
        backgroundColor: 'black',
        width: '100%',
        bottom: 50,
        position: 'absolute',
    },
    text: {
        color: 'white',
    }
})

export default PlayerWidget
