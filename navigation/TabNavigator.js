import React from "react";
import { StyleSheet, Animated, Easing } from "react-native";
import { Header } from "../styles/GlobalStyle";
import { HomeScreen } from "./screens/HomeScreen";
import { PhotoScreen } from "./screens/PhotoScreen";
import { SettingsScreen } from "./screens/SettingsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

const Tab = createBottomTabNavigator();

export const TabNavigator = (props) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // header: ({ navigation, route, options }) => {
        //   const title = getHeaderTitle(options, route.name);
          
        //   console.log(options.headerStyle);
        //   console.log(title);

        //   return <Header title={title} style={options.headerStyle} />;
        // },
        tabBarIcon: ({ focus, focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case "Home": {
              iconName = "home-outline";
              break;
            }
            case "Photos": {
              iconName = "albums-outline";
              break;
            }
            case "Settings": {
              iconName = "settings-outline";
              break;
            }
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarBackground: () => (
          <BlurView
            tint="dark"
            intensity={100}
            style={StyleSheet.absoluteFill}
          />
        ),
        headerStyle: {
          backgroundColor: "gray",
        },
        headerTintColor: "#fff",
        tabBarStyle: {
          position: "absolute",
          borderTopColor: "transparent",
          backgroundColor: "transparent",
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }}/>
      <Tab.Screen name="Photos" component={PhotoScreen} options={{ title: 'Photos'}}/>
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Settings' }}
        initialParams={{ user: "jane" }}
      />
    </Tab.Navigator>
  );
};
