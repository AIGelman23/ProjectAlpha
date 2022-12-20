import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./screens/HomeScreen";
import { PhotoScreen } from "./screens/PhotoScreen";
import { SettingsScreen } from "./screens/SettingsScreen";
import { TabNavigator } from "./TabNavigator";
import { BottomTabBarHeightContext } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();

export default AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
