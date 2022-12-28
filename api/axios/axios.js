import axios from "axios";
import { BASE_URL } from "../config";

// contains an axios instance including interceptors for the outgoing HTTP requests and
// incoming responses. Moreover, the process of refreshing JWTs is handled in here.

// The interceptors are used to add the JWT token to the HTTP request header.
// The token is retrieved from the userInfo object which is stored in AsyncStorage.

export const jwtInterceptor = (userInfo) => {
  axios.interceptors.request.use((request) => {
    const isLoggedIn = userInfo.data?.token;
    const isApiUrl = request.url.startsWith(BASE_URL);

    if (isLoggedIn && isApiUrl) {
      request.headers.Authorization = `Bearer ${userInfo.data.token}`;
    }

    return request;
  });
};
