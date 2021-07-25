import React, { useState, useEffect } from "react";
import { TouchableOpacity, ActivityIndicator, ScrollView } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";
import { Icon, Image } from "react-native-elements";
import * as MediaLibrary from "expo-media-library";


const List = () => {
  //TODO: need to pass audio to redux to get audio file in Player.js

  const [files, setFiles] = useState([]);

  useEffect(() => {
    const reqPermission = MediaLibrary.requestPermissionsAsync();
    console.log(reqPermission);

    const getPermission = MediaLibrary.getPermissionsAsync();
    console.log(getPermission);
    setFiles([]);
    loadAudio();
  }, []);

  async function loadAudio() {
    const { assets } = await MediaLibrary.getAssetsAsync({
      mediaType: MediaLibrary.MediaType.audio,
    });

    console.log("ASSETS: \n", assets);

    setFiles(assets);
  }

  const handlePress = () => {}
  const handleLike = () => {}
  const handleDot = () => {}

  return (
    <ScrollView >
      <View>
      {files.map((file) => {
        console.log("\nname: ", file.filename, "\nid : ", file.id);
        return (
          <TouchableOpacity key={file.id} onPress={handlePress}>
            <View style={styles.listbody}>
              <View style={styles.image}>
                <Image
                  source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Chain_link_icon.png",
                  }}
                  style={{ width: 60, height: 60 }}
                  PlaceholderContent={<ActivityIndicator />}
                />
                <View style={styles.name}>
                  <Text style={styles.SongName}>{file.filename}</Text>
                  <Text style={styles.ArtistName}>{file.artist? file.artist : null}</Text>
                </View>
              </View>

              <View style={styles.container}>
                <View style={styles.play}>
                  <TouchableOpacity>
                    <AntIcon
                      name="heart"
                      size={25}
                      onPress={handleLike}
                      color='black'
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.dot}>
                  <TouchableOpacity>
                    <Icon
                      name="dots-vertical"
                      type="material-community"
                      color="black"
                      size={30}
                      onPress={handleDot}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listbody: {
    backgroundColor: "#fff",
    borderRadius: 15,
    margin: 4,
    width: "100%",
    height: 80,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "row",
  },
  image: {
    marginLeft: 10,
    height: 60,
    width: 60,
    display: "flex",
    flexDirection: "row",
    flex: 1,
  },
  name: {
    marginLeft: 20,
    width: 190,
  },
  SongName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  ArtistName: {
    fontSize: 15,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "30%",
  },
});

export default List;
