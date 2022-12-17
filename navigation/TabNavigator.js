import * as React from "react";
import { PhotoScreen, ProfileScreen } from "./screens/Screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

const Tab = createBottomTabNavigator();

export const TabNavigator = (props) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Photos") {
            iconName = "photo";
            size = 30;

            return <FontAwesome name={iconName} size={size} color={color} />;
          } else if (route.name === "Profile") {

            iconName = "profile";
            size = 30;
            return <AntDesign name={iconName} size={size} color={color} />;
          }
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          borderTopColor: "#666666",
          backgroundColor: "transparent",
        },
        tabBarBackground: () => <BlurView tint="light" intensity={100} />,
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Photos" component={PhotoScreen} />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{ user: "jane" }}
      />
    </Tab.Navigator>
  );
};
