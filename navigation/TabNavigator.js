import * as React from "react";
import { PhotoScreen, ProfileScreen } from "./screens/Screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({ 
        tabBarIcon: ({ focused, color, size }) => {

          let iconName; 

          if (route.name === 'Photos') { 
            iconName = focused ? 'photo' : 'photo';

            return <FontAwesome name={iconName} size={size} color={color} />;

          } else if (route.name === 'Profile') {

            iconName = focused ? 'profile' : 'profile';

            return <AntDesign name={iconName} size={size} color={color} />;A
          }

          
        }, 
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray'
      })}
    >
      <Tab.Screen name="Photos" component={PhotoScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} initialParams={{ user: "jane"}} />
    </Tab.Navigator>
  );
};
