import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, Platform } from "react-native";
import List from "./List";
import * as MediaLibrary from "expo-media-library";
import { View } from "react-native";
import { Text } from "react-native";

const Body = () => {
  //TODO: need to featch audio file from device and pass it to list component to render it (note: need to use state management)

  //need to implement play button on list componenet

  const [files, setFiles] = useState([]);

  useEffect(() => {
    // console.log(Platform);
    if (Platform.OS === "android") {
      MediaLibrary.requestPermissionsAsync();
      MediaLibrary.getPermissionsAsync();

      setFiles([]);
      loadAudio();
    }
  }, []);

  async function loadAudio() {
    if (Platform.OS === "android") {
      const { assets } = await MediaLibrary.getAssetsAsync({
        mediaType: MediaLibrary.MediaType.audio,
      });

      // console.log("ASSETS: \n", assets);

      setFiles(assets);
    }
  }

  return (
    <ScrollView style={styles.body}>
      <Text style={styles.text}>All Music</Text>
      {files.map((file) => {
        // console.log("\nname: ", file.filename, "\nid : ", file.id);
        return (
          <View key={file.id}>
            <List
              songName={file.filename}
              songId={file.id}
              songUrl={file.uri}
            />
          </View>
        );
      })}
      <List />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#f2f2f2",
    width: "100%",
    flex: 1,
  },text: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 20,
    marginTop: -8,
  }
});

export default Body;
