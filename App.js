import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

import HomeScreen from "./screens/HomeScreen";
import Search from "./screens/Search";
import User from "./screens/User";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
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
          name="Search"
          component={Search}
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
  );
}
