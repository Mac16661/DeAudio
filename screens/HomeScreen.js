import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, SafeAreaView, StyleSheet, TextInput } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
//import { SearchBar } from "react-native-elements/";

import Body from "./HomeScreenComponents/Body";

const HomeScreen = () => {
  const [search, setSearch] = useState("");

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.greetings}>Hello Subhodip,</Text>
          <Text style={styles.que}>What you want to hear today?</Text>
          <TextInput
            placeholder="    Search here"
            style={styles.searchBar}
            onChangeText={(text) => {
              setSearch(text);
            }}
            value={search}
          />
        </View>

        <View style={styles.body}>
          <Body />
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
    justifyContent: "center",
    width: "100%",
    marginTop: 20,
    height: 160,
    backgroundColor: "#f2f2f2",
    borderBottomWidth: 2,
    borderBottomColor: "#f2f2f2",
  },
  greetings: {
    fontWeight: "bold",
    fontSize: 30,
    paddingLeft: 20,
    paddingTop: 30,
  },
  que: {
    paddingLeft: 20,
    paddingTop: 3,
  },
  searchBar: {
    fontSize: 24,
    margin: 10,
    width: "90%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  body: {
    width: "100%",
    flex: 1,
  },
});

export default HomeScreen;
