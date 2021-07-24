import React, { useState } from "react";
import { TouchableOpacity, ActivityIndicator } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";
import { Icon, Image } from "react-native-elements";

const List = (props) => {
  //TODO: accept props from parent and render it out (need to pass audio to redux to get audio file in Player.js)

  const [heartColor, setHeartColor] = useState("black");

  const handleHeartPress = () => {
    console.log("Heart pressed");
    if (heartColor === "green") {
      setHeartColor("black");
    } else if (heartColor === "black") {
      setHeartColor("green");
    }
  };

  return (
    <View style={styles.body}>
      <View style={styles.image}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Chain_link_icon.png",
          }}
          style={{ width: 60, height: 60 }}
          PlaceholderContent={<ActivityIndicator />}
        />
        <View style={styles.name}>
          <Text style={styles.SongName}>Rap God</Text>
          <Text style={styles.ArtistName}>Eminim</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.play}>
          <TouchableOpacity>
            <AntIcon
              name="heart"
              size={25}
              onPress={handleHeartPress}
              color={heartColor}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.dot}>
          <TouchableOpacity>
            <Icon
              name="dots-vertical"
              type="material-community"
              color="black"
              size={30}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#fff",
    borderRadius: 15,
    margin: 4,
    width: "100%",
    height: 80,
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    marginLeft: 10,
    height: 60,
    width: 60,
    display: "flex",
    flexDirection: "row",
    flex: 1,
  },
  name: {
    marginLeft: 20,
  },
  SongName: {
    fontSize: 21,
    fontWeight: "bold",
  },
  ArtistName: {
    fontSize: 15,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "30%",
  },
});

export default List;
