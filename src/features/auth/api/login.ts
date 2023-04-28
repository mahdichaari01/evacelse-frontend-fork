import { axios } from "@/lib/axios";

import { UserResponse } from "../types";
import { login } from "./FakeBackend";

export type LoginCredentialsDTO = {
	email: string;
	password: string;
};

export const loginWithEmailAndPassword: (
	data: LoginCredentialsDTO
) => Promise<UserResponse> = login;
