import axios from "axios";
import "axios-response-logger";

const BASE_URL = process.env.API_BASE_URL;
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

axios.interceptors.request.use(
  (value) => {
    // log in yellow, and brackets the following [REQUEST]
    console.log("\x1b[33m [REQUEST INTERCEPTOR] \x1b[0m");

    console.log(value);
    return value;
  },
  (error) => {
    console.log("\x1b[31m [REQUEST INTERCEPTOR ERROR] \x1b[0m");
    console.error(error);
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (value) => {
    console.log("\x1b[32m [RESPONSE INTERCEPTOR] \x1b[0m");
    console.log(value);
    return value;
  },
  (error) => {
    console.log("\x1b[31m [RESPONSE INTERCEPTOR ERROR] \x1b[0m");
    console.error(error);
    return Promise.reject(error);
  },
);

export default axiosInstance;
