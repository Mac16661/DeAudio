import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";


const Player = () => {
    //TODO: get audio from redux store and play here
  return (
    <View style={styles.player}>
      <View style={styles.body}>
        <View style={styles.name}>
          <Text>Rap God</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.play}>
            <TouchableOpacity>
              <AntIcon name="caretright" size={25} />
            </TouchableOpacity>
          </View>
          <View style={styles.dot}>
            <TouchableOpacity>
              <AntIcon name="stepforward" color="black" size={25} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  player: {
    backgroundColor: "white",
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
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
});

export default Player;
