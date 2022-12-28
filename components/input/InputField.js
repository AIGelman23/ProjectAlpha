import React from "react";
import { TextInput, TextInputContainer, FieldLabel, FieldButton } from "../../styles/GlobalStyle";

export const InputField = ({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
  value,
  onChangeText,
}) => {
  return (
      <TextInputContainer>
        {icon}
        {inputType === "password" ? (
          <TextInput
            placeholder={label}
            keyboardType={keyboardType}
            style={{ flex: 1, paddingVertical: 0 }}
            secureTextEntry={true}
            value={value}
            onChangeText={onChangeText}
          />
        ) : (
          <TextInput
            placeholder={label}
            keyboardType={keyboardType}
            style={{ flex: 1, paddingVertical: 0 }}
            value={value}
            onChangeText={onChangeText}
          />
        )}
        <FieldButton onPress={fieldButtonFunction}>
          <FieldLabel>{fieldButtonLabel}</FieldLabel>
        </FieldButton>
      </TextInputContainer>
  );
};
