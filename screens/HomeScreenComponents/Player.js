import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";
import {Audio} from "expo-av"


const Player = ({location, id, name}) => {
    //TODO: get audio from redux store and play here

    const [sound, setSound] = useState();

    useEffect(() => {
      load();
    },[]);

    const load = async() => {
      console.log("ID: ",id," NAME:", name," LOCATION:", location);
      const sound = new Audio.Sound();
      await sound.loadAsync({uri: location});
      setSound(sound);
      sound.playAsync();
    }
};

const styles = StyleSheet.create({
  player: {
    backgroundColor: "white",
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    backgroundColor: "#fff",
    borderRadius: 15,
    margin: 5,
    width: "100%",
    height: "10%",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    marginLeft: 20,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "30%",
  },
});

export default Player;
