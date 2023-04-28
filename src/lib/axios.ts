import Axios, { AxiosRequestConfig } from "axios";
import storage from "@/utils/storage";
const API_URL = "http://localhost:3010";

export const axios = Axios.create({
	baseURL: API_URL,
});

axios.interceptors.request.use((config) => {
	const token = storage.getToken();
	if (token) {
		config.headers.authorization = `${token}`;
	}
	config.headers.Accept = "application/json";
	return config;
});
axios.interceptors.response.use(
	(response) => response.data,
	(error) => {
		const message = error.response?.data?.message || error.message;
		console.log(message);
		return Promise.reject(error);
	}
);
