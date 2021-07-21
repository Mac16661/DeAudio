import React from "react";
import { View, Text, StyleSheet } from "react-native";

const User = () => {
  return (
    <View style={styles.container}>
      <Text >User Screen!</Text>
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

export default User;
