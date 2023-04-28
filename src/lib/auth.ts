import {
	loginWithEmailAndPassword,
	getUser,
	registerWithEmailAndPassword,
	UserResponse,
	LoginCredentialsDTO,
	RegisterCredentialsDTO,
} from "@/features/auth";
import storage from "@/utils/storage";
import { logout } from "@/features/auth/api/FakeBackend";

async function handleUserResponse(data: UserResponse) {
	const { jwt, user } = data;
	storage.setToken("token", jwt);
	return user;
}

async function userFn() {
	const user = await getUser();
	return user ?? null;
}

async function loginFn(data: LoginCredentialsDTO) {
	const response = await loginWithEmailAndPassword(data);
	const user = await handleUserResponse(response);
	return user;
}

async function registerFn(data: RegisterCredentialsDTO) {
	const response = await registerWithEmailAndPassword(data);
	const user = await handleUserResponse(response);
	return user;
}

async function logoutFn(): Promise<void> {
	storage.clearToken();
	await logout();
}

export {
	userFn as user,
	loginFn as login,
	registerFn as register,
	logoutFn as logout,
};
