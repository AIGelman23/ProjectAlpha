import React, {useCallback} from "react";
import { useFonts } from "expo-font";
import { AuthProvider } from "./context/AuthContext";
import { AppNav } from "./navigation/AppNav";

export default function App() {

  const [fontsLoaded] = useFonts({
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
  });

  useCallback(async () => {
    if (fontsLoaded) {
      console.log("fontsLoaded:");
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}
