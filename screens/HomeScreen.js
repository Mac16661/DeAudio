import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Body from "./HomeScreenComponents/Body";
import Player from "./HomeScreenComponents/Player";

const HomeScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />

        <View style={styles.head}>
          <Text style={styles.DiMusic}>DiMusic !</Text>
        </View>

        <View style={styles.body}>
          <Body />
        </View>

        <View style={styles.upperFooter}>
          <Player />
        </View>

        <View style={styles.lowerFooter}>
          <Text>Bottom Navigation</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
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
  head: {
    justifyContent: 'center',
    width: "100%",
    marginTop: 25,
    height: 60,
    borderBottomWidth: 2,
    borderBottomColor: '#f2f2f2',
  },
  DiMusic: {
    fontWeight: 'bold',
    fontSize: 25,
    paddingLeft: 20,
  },
  body: {
    width: "100%",
    flex: 1,
  },
  upperFooter: {
    width: "97%",
    position: "absolute",
    bottom: 63,
    height: 70,
    borderRadius: 10,
    borderColor: '#f2f2f2',
    borderWidth: 3,
    marginBottom: 5,
  },
  lowerFooter: {
    width: "97%",
    position: "absolute",
    bottom: 0,
    height: 60,
    borderRadius: 10,
    borderColor: '#f2f2f2',
    borderWidth: 3,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
