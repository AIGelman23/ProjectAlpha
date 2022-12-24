import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import { BASE_URL } from "../api/config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const login = (username, password) => {
    setIsLoading(true);

    axios.interceptors.request.use((request) => {
      const isLoggedIn = userInfo.data?.token;
      const isApiUrl = request.url.startsWith(BASE_URL);

      if (isLoggedIn && isApiUrl) {
        request.headers.Authorization = `Bearer ${userInfo.data.token}`;
      }

      console.log("sdsdsd ====" + JSON.stringify(request));

      return request;
    });

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
    // setUserToken('asdf');
    setIsLoading(false);
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem("userInfo");
    AsyncStorage.removeItem("userToken");
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userInfo = await AsyncStorage.getItem("userInfo");
      let userToken = await AsyncStorage.getItem("userToken");
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserToken(userToken);
        setUserInfo(userInfo);
      }

      setUserToken(userToken);
      setIsLoading(false);
    } catch (error) {
      console.log(`isLogged in error ${error}}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, isLoading, userToken }}>
      {children}
    </AuthContext.Provider>
  );
};
