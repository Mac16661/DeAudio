import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

const ArtistContainer = () => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.text}>Artists</Text>
        <Icon name="user" size={24} type="font-awesome" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    height: 60,
    width: 150,
    borderRadius: 15,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ArtistContainer;
