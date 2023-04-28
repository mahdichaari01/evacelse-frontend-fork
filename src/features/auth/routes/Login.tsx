import { useState } from "react";
import {
	FormControl,
	Box,
	Heading,
	FormLabel,
	Input,
	Button,
	Flex,
	Spacer,
} from "@chakra-ui/react";
import { useLogin } from "@/lib/authContext";
export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { isLoading, error, login } = useLogin();

	//remove after debugging
	return (
		<Box className="outline-4 outline-black outline p-7 rounded w-fit m-2">
			<Heading size={"lg"} className="mb-3">
				Login Form
			</Heading>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					login({ email, password });
				}}
			>
				<Flex direction={"column"} gap={"8px"}>
					<FormControl>
						<FormLabel>Email</FormLabel>
						<Input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							disabled={isLoading}
						/>
					</FormControl>
					<FormControl>
						<FormLabel>Password</FormLabel>
						<Input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							disabled={isLoading}
						/>
					</FormControl>
					<Flex>
						<Spacer />
						<Button disabled={isLoading} type="submit" colorScheme="teal">
							{isLoading ? "loading" : "login"}
						</Button>
						<Spacer />
					</Flex>
				</Flex>
			</form>
		</Box>
	);
};
