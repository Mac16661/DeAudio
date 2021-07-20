import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Body = () => {
    return (
        <View style={styles.body}>
            <Text>This is body</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#fff',
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Body
