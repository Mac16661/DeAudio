import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const SearchScreen = ({ navigation }) => {
    return (
        <View style={styles.container }>
            <Text>Search Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default SearchScreen
