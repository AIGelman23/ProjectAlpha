import React from "react";
import { View, Text, Button } from "react-native";

export default HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to John's Photos"
      onPress={() => navigation.navigate("Profile", { name: "Jane" })}
    />
  );
};

const ProfileScreen = ({ navigation, route }) => {
    return <Text>This is {route.params.name}'s profile</Text>;
};
