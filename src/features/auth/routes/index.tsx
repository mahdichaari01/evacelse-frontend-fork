import { Link, Navigate, Route, Routes } from "react-router-dom";

import { Login } from "./Login";
import { Register } from "./Register";
import { Box, Button, ButtonGroup } from "@chakra-ui/react";

export const AuthRoutes = () => {
	const Menu = () => (
		<Box className="m-4 flex flex-col gap-3 w-fit">
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
