import React from 'react'
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet } from 'react-native'
import {Icon} from 'react-native-elements';

const PlaylistContainer = () => {
    return (
        <TouchableOpacity>
        <View style={styles.container}>
            
            <Text style={styles.text}>Playlists</Text>
            <Icon name="playlist-music"
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
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default PlaylistContainer
