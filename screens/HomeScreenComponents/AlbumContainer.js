import React from 'react'
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet } from 'react-native'
import {Icon} from 'react-native-elements';

const AlbumContainer = () => {
    return (
        <TouchableOpacity>
        <View style={styles.container}>
            
            <Text style={styles.text}>Albums</Text>
            <Icon name="album"
              size={28}
              type="material-community"
              />
            
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        height: 60,
        width: 150,
        borderRadius: 15,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginRight: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default AlbumContainer
