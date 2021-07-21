import React from "react";
import { TouchableOpacity } from "react-native";
import { View, StyleSheet } from "react-native";
import List from "./List";

const Body = () => {
  //TODO: need to featch audio file from device and pass it to list component to render it (note: need to use state management)
  return (

    <View style={styles.body}>
        <List />
        <List />
        <List />
        <List />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#f2f2f2",
    width: "100%",
    flex: 1,
    alignItems: "center",
  },
});

export default Body;
