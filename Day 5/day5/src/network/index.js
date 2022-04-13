// import axios from "axios";
// import store from "../store5/index";
// import { setLoading } from "../store5/actions/loading";

// export const axiosInstance = axios.create({
//   baseURL: "https://fakestoreapi.com/",
// });

// // Add a request interceptor
// axiosInstance.interceptors.request.use(
//   function (config) {
//     console.log("Interceptor request", config);
//     store.dispatch(setLoading(true));
//     config.params = {
//       apiKey: "93de3bd79f75665a1328de0e3d3fd7b4",
//     };
//     config.headers = {
//       ...config.headers,
//       access_token: "da23sd5asd4as21d3as2d1",
//     };
//     // Do something before request is sent
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

// // Add a response interceptor
// axiosInstance.interceptors.response.use(
//   function (response) {
//     console.log("Interceptor response", response);
//     store.dispatch(setLoading(false));
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response;
//   },
//   function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
//   }
// );
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://api.themoviedb.org/3/",
});
