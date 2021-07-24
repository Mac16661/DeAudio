import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import List from "./List";

const Body = () => {
  //TODO: need to featch audio file from device and pass it to list component to render it (note: need to use state management)

  //need to implement play button on list componenet
  const handlePress = () => {};

  return (
    <ScrollView style={styles.body}>
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#f2f2f2",
    width: "100%",
    flex: 1,
  },
});

export default Body;
