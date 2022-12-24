import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "../../styles/GlobalStyle";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { InputField } from "../../components/input/InputField";
import { LoginButton } from "../../components/buttons/LoginButton";
import SVGImg from "../../assets/images/svgs/alpha.svg";

export const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
      <SVGImg width={100} height={100} />
        <Text
          style={{
            fontFamily: "OpenSans-Regular",
            fontSize: 30,
            marginBottom: 30,
          }}
        >
          Project Alpha Login
        </Text>
        <InputField   
          label={"Email"}
          icon={<MaterialIcons 
            name="alternate-email"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />}
        />
        <InputField
          label={"Password"}
          inputType="password"
          icon={
            <AntDesign 
              name="lock"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          fieldButtonLabel={"Forgot?"}
          fieldButtonFunction={() => {}}
        />
        <LoginButton 
          label={"Login"}
          onPress={() => navigation.navigate("Home")}
        />
        <View style={{ 
            flexDirection: "row", 
            justifyContent: "center" }}>
          <Text
            style={{
              textAlign: "center",
              color: "#666",
              marginBottom: 30,
            }}
          >
            New to the app?
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            style={{}}
          >
            <Text style={{ color: "blue", fontWeight: "700" }}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
