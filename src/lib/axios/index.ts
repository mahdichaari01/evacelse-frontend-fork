import axios from "axios";

const BASE_URL = process.env.API_BASE_URL;
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

// axiosInstance.interceptors.request.use(
//   (value) => {
//     // log in yellow, and brackets the following [REQUEST]
//     console.log("\x1b[33m [REQUEST INTERCEPTOR] \x1b[0m");
//
//     console.log(
//       Object.fromEntries(
//         Object.entries(value).filter(([k, v]) =>
//           ["headers", "baseURL", "method", "url"].includes(k),
//         ),
//       ),
//     );
//     return value;
//   },
//   (error) => {
//     console.log("\x1b[31m [REQUEST INTERCEPTOR ERROR] \x1b[0m");
//     console.log(error.toString());
//     console.log(
//       Object.fromEntries(
//         Object.entries(error.config).filter(([k, v]) =>
//           ["headers", "baseURL", "method", "url"].includes(k),
//         ),
//       ),
//     );
//     return Promise.reject(error);
//   },
// );

// axiosInstance.interceptors.response.use(
//   (value) => {
//     console.log("\x1b[32m [RESPONSE INTERCEPTOR] \x1b[0m");
//     // console.log(value);
//
//     console.log(
//       Object.fromEntries([
//         ...Object.entries(value).filter(([k, v]) => ["status"].includes(k)),
//         ["URL", value.config.url],
//         ["Method", value.config.method],
//       ]),
//     );
//
//     return value;
//   },
//   (error) => {
//     console.log("\x1b[31m [RESPONSE INTERCEPTOR ERROR] \x1b[0m");
//     console.log(error.toString());
//     console.log(
//       Object.fromEntries(
//         Object.entries(error.config).filter(([k, v]) =>
//           ["headers", "baseURL", "method", "url"].includes(k),
//         ),
//       ),
//     );
//     return Promise.reject(error);
//   },
// );

export default axiosInstance;
