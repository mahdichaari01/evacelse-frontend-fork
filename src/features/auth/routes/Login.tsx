import { useState } from "react";
import { useLogin } from "@/lib/auth";
import { useNavigate } from "react-router-dom";
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
export const Login = () => {
	const navigate = useNavigate();
	const { mutateAsync, isLoading, isSuccess } = useLogin();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	if (isSuccess) {
		setTimeout(() => {
			navigate("/");
		}, 1000);
		return <Box>Login Sucessful</Box>;
	}

	//remove after debugging
	(window as any).mutate = mutateAsync;
	return (
		<Box className="outline-4 outline-black outline p-7 rounded w-fit m-2">
			<Heading size={"lg"} className="mb-3">
				Login Form
			</Heading>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					mutateAsync({ email, password });
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
