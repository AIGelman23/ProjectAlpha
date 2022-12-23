import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "../../styles/GlobalStyle";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

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
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            margin: 20,
            marginBottom: 25,
          }}
        >
          <MaterialIcons
            name="alternate-email"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder="Email"
            style={{ flex: 1, paddingVertical: 0 }}
            keyboardType="email-address"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            margin: 20,
            marginBottom: 25,
          }}
        >
          <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder="Password"
            style={{ flex: 1, paddingVertical: 0 }}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            backgroundColor: "blue",
            padding: 15,
            borderRadius: 20,
            marginBottom: 30,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "700",
              fontSize: 16,
              color: "#fff",
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
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
            Already Registered?
          </Text>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{}}
          >
            <Text style={{ color: "blue", fontWeight: "700" }}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
