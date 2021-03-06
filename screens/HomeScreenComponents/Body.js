import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, Platform } from "react-native";
import List from "./List";
import * as MediaLibrary from "expo-media-library";
import { View } from "react-native";
import { Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Body = () => {
  const [files, setFiles] = useState([]);

  async function loadAudioList() {
    if (Platform.OS === "android" || "ios") {
      const { assets } = await MediaLibrary.getAssetsAsync({
        mediaType: MediaLibrary.MediaType.audio,
      });

      setFiles(assets);
    }
  }

  useEffect(() => {
    if (Platform.OS === "android") {
      MediaLibrary.requestPermissionsAsync();
      MediaLibrary.getPermissionsAsync();

      setFiles([]);
      loadAudioList();
    }
  }, []);

  useEffect(() => {
    setLike();
  }, []);

  //initilizing setLike with an empty array to store all liked songs.
  const setLike = async () => {
    var mayArr = [];
    try {
      await AsyncStorage.setItem("LikedItems", JSON.stringify(mayArr));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ScrollView style={styles.body}>
      <Text style={styles.text}>All Music</Text>
      {files.map((file) => {
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#f2f2f2",
    width: "100%",
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    paddingLeft: 20,
    marginTop: 0,
  },
});

export default Body;
