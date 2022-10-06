import axios from "axios";
// eslint-disable-next-line no-undef
// const { REACT_APP_BASE_URL } = process.env;

const axiosApiIntances = axios.create({
  baseURL: "http://localhost:8080",
});

// Add a request interceptor
axiosApiIntances.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axiosApiIntances;
