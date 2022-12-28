import axios from "axios";

import { BASE_URL } from "../config";

// This is the function that is called from the LoginScreen.js
// It takes the username and password from the user input and sends it to the backend
// The backend then returns a JWT token which is stored in AsyncStorage and used for
// authentication in the app.
export const authenticateUser = (username, password, AsyncStorage, setUserInfo, setUserToken) => {
  axios
    .post(`${BASE_URL}/sessions/create`, {
      username,
      password,
    })
    .then((res) => {
      let userInfo = res.data;
      setUserInfo(userInfo);
      setUserToken(userInfo.data.token);
      AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
      AsyncStorage.setItem("userToken", userInfo.data.token);
      console.log(res.data);
      console.log("User Token:" + userInfo.data.token);
    })
    .catch((err) => {
      console.log("Login Error:" + err);
    });
};
