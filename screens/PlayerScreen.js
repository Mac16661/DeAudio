import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Player from "./PlayerScreenComponents/Player";

const Search = () => {
  return (
    <View style={styles.container}>
      <Player />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
});
export default Search;
