import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// const axiosInstanceDoctor = axios.create();

// axiosInstanceDoctor.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("tokenDoctor");
//     if (token) {
//       config.headers.authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

export { axiosInstance };
