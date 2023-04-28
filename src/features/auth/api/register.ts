import { UserResponse } from "../types";
import { register } from "./FakeBackend";

export type RegisterCredentialsDTO = {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
};

export const registerWithEmailAndPassword: (
	data: RegisterCredentialsDTO
) => Promise<UserResponse> = register;
