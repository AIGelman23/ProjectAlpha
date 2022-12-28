import React from "react";
import { AuthButton, AuthButtonLabel } from "../../styles/GlobalStyle";

export const LoginButton = ({ label, onPress }) => {
  return (
    <AuthButton
      onPress={onPress}>
      <AuthButtonLabel>
        {label}
      </AuthButtonLabel>
    </AuthButton>
  );
};
