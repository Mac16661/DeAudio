import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, Image } from "react-native";
import { Audio } from "expo-av";
import { selectLocation } from "../../redux/uriSlice";
import { useSelector } from "react-redux";
import { ActivityIndicator } from "react-native";
import { Icon, LinearProgress } from "react-native-elements";

const Player = () => {
  //TODO: get the audio list and play it one by one ...

  const location = useSelector(selectLocation);
  
  const [sound, setSound] = useState();
  const [duration, setDuration] = useState();
  const [position, setPosition] = useState();
  const [progress, setProress] = useState();
  const [play, setPaly] = useState("play");

  useEffect(() => {
    if (location.id != null) {
      // sound ? sound.stopAsync(): undefined;
      load();
      console.log("music changed ");
    }
  }, [location.id]);



  useEffect(() => {
    return sound
      ? async() => {
          console.log("Unloading Sound");
          await sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  onPlaybackStatusUpdate = playbackStatus => {
    //console.log(playbackStatus.isLoaded);
    setPosition(playbackStatus.positionMillis);
    let prog = playbackStatus.positionMillis/playbackStatus.durationMillis
    //console.log(prog);
    setProress(prog);
    if(playbackStatus.isPlaying) {
      setPaly("pausecircle");
    }  

    if(playbackStatus.error){
      console.log(error.message);
    }
    
  }

  const load = async () => {
    const sound = new Audio.Sound();
    await sound.loadAsync({ uri: location.uri });
    setSound(sound);
    sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
    sound.getStatusAsync().then(function(result) {
      setDuration(result.durationMillis)
    })
    
    sound.playAsync();
  };

  const handlePlayPause = async () => {
    sound.getStatusAsync().then(async(result)=> {
      if(result.isPlaying === true && result.isLoaded === true){
        await sound.pauseAsync();
        setPaly("play")
      }else if(result.isPlaying === false && result.isLoaded === true){
        await sound.playAsync();
        setPaly("pausecircle")
      }
    })
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgSection}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Chain_link_icon.png",
          }}
          style={{ width: 350, height: 300 }}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>

      <View style={styles.nameSection}>
        <Text style={styles.name}>{location.name}</Text>
        <LinearProgress color="black" variant="determinate" value={progress} />
        <View style={styles.nameTime}>
        <Text style={styles.name}>{position}</Text>
        <Text style={styles.name}>{duration}</Text>
        </View>
        
      </View>

      <View style={styles.buttonSection}>
        <TouchableOpacity>
          <Icon name="shuffle" size={30} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="stepbackward" type="antdesign" size={40} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePlayPause}>
          <Icon name={play} type="antdesign" size={60} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="stepforward" type="antdesign" size={40} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="repeat" type="feather" size={25} />
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity>
          <Icon style={styles.heart} name="heart" type="antdesign" size={30} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon
            style={styles.heart}
            name="arrow-downward"
            size={30}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon style={styles.list} name="list" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imgSection: {},
  nameSection: {
    height: 80,
    display: "flex",
    alignItems: "center",
    margin: 20,
    marginTop: 40,
    width: 350,
    justifyContent: "space-between",
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
  },
  nameTime: {
    display: 'flex',
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-between',
  },
  heart: {
    marginLeft: 10,
  },
  buttonSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: 20,
    width: "100%",
  },
  bottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginTop: 20,
  },
});

export default Player;
