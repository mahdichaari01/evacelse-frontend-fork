import { axios } from "@/lib/axios";

import { AuthUser } from "../types";

import { getUser as fakeGetUser } from "./FakeBackend";
export const getUser = fakeGetUser;
