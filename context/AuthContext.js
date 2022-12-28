import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { authenticateUser } from "../api/auth/authUser";
import { jwtInterceptor } from "../api/axios/axios";
import { BASE_URL } from "../api/config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  axios.interceptors.request.use((request) => {
    const isLoggedIn = userInfo.data?.token;
    const isApiUrl = request.url.startsWith(BASE_URL);

    if (isLoggedIn && isApiUrl) {
      request.headers.Authorization = `Bearer ${userInfo.data.token}`;
    }

    return request;
  });


  const login = (username, password) => {
    setIsLoading(true);

    authenticateUser(
      username,
      password,
      AsyncStorage,
      setUserInfo,
      setUserToken
    );

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
    <AuthContext.Provider
      value={{ login, logout, isLoading, userToken, userInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
};
