import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { Audio } from "expo-av";
import { selectLocation } from "../../redux/uriSlice";
import { useSelector } from "react-redux";

const Player = () => {
  //TODO: get the audio list and play it one by one ...

  const location = useSelector(selectLocation);

  useEffect(() => {
    if (location.id != null) {
      load();
      console.log("music changed ");
    }
  }, [location.id]);

  const [sound, setSound] = useState();


  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const load = async () => {
    const sound = new Audio.Sound();
    await sound.loadAsync({ uri: location.uri });
    setSound(sound);
    sound.playAsync();
  };

  const handlePause = async () => {
    await sound.pauseAsync();
  }

  return (
    <View style={styles.container}>
      <Text>{location.name}</Text>
      <TouchableOpacity onPress={handlePause}>
        <Text>pause</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Player;
