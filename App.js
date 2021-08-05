import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import HomeScreen from "./screens/HomeScreen";
import PlayerScreen from "./screens/PlayerScreen";
import User from "./screens/User";
import { Provider } from "react-redux";
import configureStore from './redux/store'
import PlayerWidget from "./screens/PlayerWidget";
// import Search from "./screens/PlayerScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={configureStore}>
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: "black",
          inactiveTintColor: "grey",
          style: {
            backgroundColor: "#fff",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: ({ color, size }) => (
              <TouchableOpacity>
                <Icon reverseColor name="home" size={size} color={color} />
              </TouchableOpacity>
            ),
          }}
        />
        <Tab.Screen
          name="Music"
          component={PlayerScreen}
          options={{
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: ({ color, size }) => (
              <TouchableOpacity>
                <Icon
                  reverseColor
                  name="applemusic"
                  type="fontisto"
                  color={color}
                  size={size}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Tab.Screen
          name="User"
          component={User}
          options={{
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: ({ color, size }) => (
              <TouchableOpacity>
                <Icon
                  reverseColor
                  name="user"
                  type="antdesign"
                  color={color}
                  size={size}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    <PlayerWidget />
    </Provider>
  );
}
