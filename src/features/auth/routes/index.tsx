import { Link, Navigate, Route, Routes } from "react-router-dom";

import { Login } from "./Login";
import { Register } from "./Register";
import { useLogout, useUser } from "@/lib/auth";
import { Box, Button, ButtonGroup, Heading } from "@chakra-ui/react";

export const AuthRoutes = () => {
	const user = useUser();
	const { mutateAsync, isLoading } = useLogout();
	const data = user.data;
	const Menu = () => (
		<Box className="m-4 flex flex-col gap-3 w-fit">
			<Heading size={"md"}>
				{data ? `Welcome ${data.firstName}` : "notLoggedIn"}{" "}
			</Heading>
			{data ? (
				<Button disabled={isLoading} onClick={() => mutateAsync({})}>
					{isLoading ? "..." : "Logout"}
				</Button>
			) : (
				<> </>
			)}
			<ButtonGroup>
				<Button>
					<Link to="register">Register</Link>
				</Button>
				<Button>
					<Link to="login">Login</Link>
				</Button>
			</ButtonGroup>
		</Box>
	);
	return (
		<>
			<Menu />
			<Routes>
				<Route path="register" element={<Register />} />
				<Route path="login" element={<Login />} />
				<Route path="*" element={<Navigate to="login" />} />
			</Routes>
		</>
	);
};
