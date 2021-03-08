import axios from "axios";
import cookieStorageService from 'Services/storage/cookieStorage';

axios.interceptors.request.use(
  config => {
    console.log('configure axios');
      const token = cookieStorageService.getAccessToken();
      if (token) {
          config.headers['Authorization'] = 'Bearer ' + token;
      }
      config.headers['Content-Type'] = 'application/json';
      return config;
  },
  error => {
      Promise.reject(error)
  }
);


axios.interceptors.response.use(
    (response) => {
      return response;
    },
    async function (error) {
      const originalRequest = error;
      console.log(originalRequest);
      if (typeof error.response === "undefined") {
        alert("a server error happNeD, we will fix it shortly");
        return Promise.reject(error);
      }
      if (
        error.response.status === 401 &&
        !cookieStorageService.getRefreshToken()
      ) {
        window.location.href = "/login/";
        return Promise.reject(error);
      }
      if (
        error.response.status === 401 &&
        error.response.statusText === "Unauthorized" &&
        cookieStorageService.getRefreshToken() !== undefined
      ) {
        const refreshToken = cookieStorageService.getRefreshToken();
        return axios
          .post(`${process.env.API_URL}token`, {
            client_id: process.env.API_CLIENT_ID,
            client_secret: process.env.API_CLIENT_SECRET,
            grant_type: "refresh_token",
            refresh_token: refreshToken,
          })
          .then((response) => {
            cookieStorageService.setToken(response.data)
            window.location.reload();
            axiosInstance.defaults.headers["Authorization"] =
              "Bearer " + response.data.access_token;
          })
          .catch((err) => console.log(err));
      }
    }
);