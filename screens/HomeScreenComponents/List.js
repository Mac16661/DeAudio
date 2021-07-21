import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";

const List = (props) => {
  //TODO: accept props from parent and render it out (need to pass audio to redux to get audio file in Player.js)
  return (
    <View style={styles.body}>
      <View style={styles.name}>
        <Text>Rap God</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.play}>
          <TouchableOpacity>
            <AntIcon name="heart" size={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.dot}>
          <TouchableOpacity>
            <AntIcon name="upcircle" color='black' size={25} />
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
  paly: {},
  dot: {},
});

export default List;
