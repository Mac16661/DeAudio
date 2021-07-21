import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import HomeScreen from "./screens/HomeScreen";
import Search from "./screens/Search";
import User from "./screens/User";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: () => {return null},
            tabBarIcon: ({color,size}) => (
              <Icon reverseColor name="home"  type='font-awesome' size={size}/>
            ),
          }}
        />
        <Tab.Screen name="Search" component={Search}
          options={{
            tabBarLabel: () => {return null},
            tabBarIcon: ({color, size}) => (
              <Icon reverseColor name="search"  type='font-awesome' size={size}/>
            ),
          }}
        />
        <Tab.Screen name="User" component={User}
          options={{
            tabBarLabel: () => {return null},
            tabBarIcon: ({color, size}) => (
              <Icon reverseColor name="user"    type='font-awesome' size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
