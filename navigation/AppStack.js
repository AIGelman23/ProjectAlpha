import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabNavigator } from "./TabNavigator";
import { BottomTabBarHeightContext } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
  );
};
