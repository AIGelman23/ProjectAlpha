import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default App = () => {
  return (
      <NavigationContainer headerMode="none">
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Photos" }}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};
