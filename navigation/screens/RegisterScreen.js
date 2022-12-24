import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "../../styles/GlobalStyle";
import { MaterialIcons, Ionicons, AntDesign } from "@expo/vector-icons";
import { InputField } from "../../components/input/InputField";
import { LoginButton } from "../../components/buttons/LoginButton";

export const RegisterScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "OpenSans-Regular",
            fontSize: 30,
            marginBottom: 30,
          }}
        >
          Project Alpha Register
        </Text>
        <InputField
          label={"Full Name"}
          icon={
            <Ionicons
              name="person-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
        />
        <InputField
          label={"Email"}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
        />
          <InputField
          label={"Password"}
          inputType="password"
          icon={
            <AntDesign
              name="unlock"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
        />
          <InputField
          label={"Confirm Password"}
          inputType="password"
          icon={
            <AntDesign 
              name="unlock"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
        />
        <LoginButton 
          label={"Register"}
          onPress={() => {}}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#666",
              marginBottom: 30,
            }}
          >
            Already Registered?
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{}}>
            <Text style={{ color: "blue", fontWeight: "700" }}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
