import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export const InputField = ({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
}) => {
  return (
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
        {icon}
        {inputType === "password" ? (
          <TextInput
            placeholder={label}
            keyboardType={keyboardType}
            style={{ flex: 1, paddingVertical: 0 }}
            secureTextEntry={true}
          />
        ) : (
          <TextInput
            placeholder={label}
            keyboardType={keyboardType}
            style={{ flex: 1, paddingVertical: 0 }}
          ></TextInput>
        )}
        <TouchableOpacity onPress={fieldButtonFunction}>
          <Text style={{ color: "blue", fontWeight: '700' }}>{fieldButtonLabel}</Text>
        </TouchableOpacity>
      </View>
  );
};