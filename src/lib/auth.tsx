import { configureAuth } from "react-query-auth";

import {
	loginWithEmailAndPassword,
	getUser,
	registerWithEmailAndPassword,
	UserResponse,
	LoginCredentialsDTO,
	RegisterCredentialsDTO,
	AuthUser,
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

const authConfig = {
	userFn,
	loginFn,
	registerFn,
	logoutFn,
};

export const { useUser, useLogin, useRegister, useLogout, AuthLoader } =
	configureAuth<
		AuthUser,
		ErrorEvent,
		LoginCredentialsDTO,
		RegisterCredentialsDTO
	>(authConfig);
