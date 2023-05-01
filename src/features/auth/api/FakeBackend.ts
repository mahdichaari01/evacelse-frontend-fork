import { deserializeMap, serilizeMap } from "@/utils/mapUtils";
import {
	AuthUser,
	LoginCredentialsDTO,
	RegisterCredentialsDTO,
	UserResponse,
} from "..";

const TIMEOUT = 1000;

interface Repository<K, V> {
	listAll: () => V[];
	getById: (id: K) => V | undefined;
	get: (criteria: Partial<V>) => V | undefined;
	add: (entity: V) => V;
	delete: (id: K) => number;
}
interface Account {
	user: AuthUser;
	password: string;
}

class UsersDB implements Repository<string, Account> {
	private key = "users";
	private db: Map<string, Account>;
	private currentAccount: AuthUser | undefined;
	private currentAccountKey = "currentAccount";
	constructor() {
		let data = localStorage.getItem(this.key);
		let currentAccount = localStorage.getItem(this.currentAccountKey);
		if (data) {
			this.db = deserializeMap<string, Account>(data);
		} else {
			this.db = new Map<string, Account>();
			this.persist();
		}
		if (!!currentAccount) {
			this.currentAccount = JSON.parse(currentAccount);
		}

		(window as any).usersDB = this;
	}
	persist() {
		window.localStorage.setItem(this.key, serilizeMap(this.db));
		if (this.currentAccount)
			window.localStorage.setItem(
				this.currentAccountKey,
				JSON.stringify(this.currentAccount)
			);
		else window.localStorage.removeItem(this.currentAccountKey);
	}
	listAll() {
		return Array.from(this.db.values());
	}

	getById(id: string) {
		return this.db.get(id);
	}
	get(criteria: Partial<Account>) {
		const [key, value] = Object.entries(criteria)[0];
		return Array.from(this.db.values()).find(
			(account: any) => account.user[key] === value
		);
	}
	add(entity: Account) {
		this.db.set(entity.user.email.toLowerCase(), entity);
		this.persist();
		return entity;
	}
	delete(id: string) {
		const r = this.db.delete(id) ? 1 : 0;
		this.persist();
		return r;
	}
	setCurrentAccount(account: AuthUser | undefined) {
		this.currentAccount = account;
		this.persist();
	}
	getCurrentAccount() {
		return this.currentAccount;
	}
}

declare global {
	interface Window {
		currentAccount: UserResponse | undefined;
	}
}

const FakeAuth = (DB: UsersDB) => {
	const login = (data: LoginCredentialsDTO): Promise<UserResponse> =>
		new Promise((resolve, reject) => {
			setTimeout(() => {
				const account = DB.getById(data.email.toLowerCase());
				if (!account) {
					reject(new Error("User not found"));
				} else {
					if (account?.password !== data.password) {
						reject(new Error("Password is incorrect"));
					}
					const response: UserResponse = {
						jwt: "fake-jwt-token",
						user: account.user,
					};
					DB.setCurrentAccount(response.user);
					resolve(response);
				}
			}, TIMEOUT);
		});

	const register = (data: RegisterCredentialsDTO): Promise<UserResponse> =>
		new Promise<UserResponse>((resolve, reject) => {
			setTimeout(() => {
				if (DB.getById(data.email)) {
					reject(new Error("Email is already in use"));
				} else {
					const account: Account = {
						user: {
							id: Math.random().toString(36).substr(2, 9),
							email: data.email,
							firstName: data.firstName,
							lastName: data.lastName,
						},
						password: data.password,
					};
					DB.add(account);
					const response: UserResponse = {
						jwt: "fake-jwt-token",
						user: account.user,
					};
					DB.setCurrentAccount(response.user);
					resolve(response);
				}
			}, TIMEOUT);
		});
	const getUser = () =>
		new Promise<AuthUser>((resolve, reject) => {
			setTimeout(() => {
				if (DB.getCurrentAccount()) {
					resolve(DB.getCurrentAccount() as AuthUser);
				} else reject("No user is logged in");
			}, TIMEOUT);
		});
	const logout = () =>
		new Promise<void>((resolve, reject) => {
			setTimeout(() => {
				DB.setCurrentAccount(undefined);
				resolve();
			}, TIMEOUT);
		});

	return { login, register, getUser, logout };
};

export const { login, register, getUser, logout } = FakeAuth(new UsersDB());
(window as any).login = login;
(window as any).register = register;
(window as any).getUser = getUser;
(window as any).logout = logout;
