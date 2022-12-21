import React from "react";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "../../styles/GlobalStyle";


export const SettingsScreen = ({ route, navigation }) => {
  const { user } = route.params;
  return (
    <SafeAreaView>
      <Text style={styles.text}>This is the profile of {user}. </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "white",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
