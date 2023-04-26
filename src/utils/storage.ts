const storagePrefix = "app";

const storage = {
	getToken: (key: string = "token") => {
		return JSON.parse(
			window.localStorage.getItem(`${storagePrefix}-${key}`) as string
		);
	},
	setToken: (key: string = "token", token: string) => {
		window.localStorage.setItem(`${storagePrefix}-${key}`, JSON.stringify(token));
	},
	clearToken: (key = "token") => {
		window.localStorage.removeItem(`${storagePrefix}-${key}`);
	},
};

export default storage;
