import axios from "axios";

const axiosApiIntances = axios.create({
  baseURL: "https://karcis-project-server.vercel.app",
<<<<<<< HEAD
  // baseURL: "http://localhost:8080",
=======
//   baseURL: "http://localhost:8080",
>>>>>>> 8f12e4b77732ade06500e817d08d15bc5ae5cb86
});

axiosApiIntances.interceptors.request.use(
  function (config) {
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      refreshtoken: localStorage.getItem("refreshToken"),
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosApiIntances.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 403) {
      if (
        error.response.data.message ===
        "Please sign in again, your token is expired"
      ) {
        axiosApiIntances
          .post("/api/auth/refresh")
          .then((res) => {
            localStorage.setItem("token", res.data.data.token);
            localStorage.setItem("refreshToken", res.data.data.refreshToken);
            window.location.reload();
          })
          .catch(() => {
            localStorage.clear();
            window.location.href = "/signin";
          });
      } else {
        localStorage.clear();
        window.location.href = "/signin";
      }
    }
    return Promise.reject(error);
  }
);

export default axiosApiIntances;
