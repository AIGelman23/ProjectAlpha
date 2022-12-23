import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RegisterScreen } from "./screens/RegisterScreen";
import { LoginScreen } from "./screens/LoginScreen";

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Register"
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
};
