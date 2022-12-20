import React from "react";
import { Text, Pressable, SafeAreaView, StyleSheet } from "react-native";
import { Wrapper } from "../../styles/Default";


export const SettingsScreen = ({ route, navigation }) => {
 const { user } = route.params;
  return (
    <Wrapper>
      <Text style={styles.text}>This is the profile of {user}. </Text>
    </Wrapper>
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
