import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, SafeAreaView, StyleSheet, TextInput } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import FavContainer from "./HomeScreenComponents/FavContainer";
import PlaylistContainer from "./HomeScreenComponents/PlaylistContainer";
import ArtistContainer from "./HomeScreenComponents/ArtistContainer";
import AlbumContainer from "./HomeScreenComponents/AlbumContainer";
import { ScrollView } from "react-native";
import Body from "./HomeScreenComponents/Body";

const HomeScreen = () => {
  const [search, setSearch] = useState("");

  const handleClear = () => {
    setSearch("");
  };

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.greetings}>Hello Subhodip,</Text>
          <Text style={styles.que}>What you want to hear today?</Text>

          <View style={styles.searchSection}>
            <Icon
              style={styles.searchIcon}
              name="search"
              size={30}
              color="#000"
            />
            <TextInput style={styles.searchBar}
              placeholder="Search here"
              style={styles.searchBar}
              onChangeText={(text) => {
                setSearch(text);
              }}
              value={search}
            />
            <TouchableOpacity>
              <Icon
                style={styles.closeIcon}
                name="closecircle"
                type="antdesign"
                size={20}
                color="#000"
                onPress={handleClear}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.horiScroll}>
          <ScrollView
            horizontal={true}
            style={styles.bottonBar}
            showsHorizontalScrollIndicator={false}
          >
            <FavContainer />
            <PlaylistContainer />
            <ArtistContainer />
            <AlbumContainer />
          </ScrollView>
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
  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 10,
    height: 15,
  },searchBar: {
    height: 100,
  },
  searchIcon: {
    padding: 10,
  },
  closeIcon: {
    padding: 15,
  },
  searchBar: {
    flex: 1,
    fontSize: 24,
    width: "90%",
    height: 50,
    backgroundColor: "#fff",
  },
  body: {
    width: "100%",
    flex: 1,
    backgroundColor: "#f2f2f2",
    flexDirection: "row",
  },
  horiScroll: {
    margin: 0,
    height: "11%",
    backgroundColor: "#f2f2f2",
  },
  bottonBar: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    paddingTop: 3,
  },
});

export default HomeScreen;
