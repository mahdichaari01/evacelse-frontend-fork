import { useRegister } from "@/lib/auth";
import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Spacer,
} from "@chakra-ui/react";
import { useState } from "react";

export const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const { mutateAsync, isError, isLoading, isSuccess } = useRegister();
	return (
		<Box className="outline-4 outline-black outline p-7 rounded w-fit m-2">
			<Heading size={"lg"} className="mb-3">
				Registration Form
			</Heading>
			<form
				onSubmit={async (e) => {
					e.preventDefault();
					await mutateAsync({ email, password, firstName, lastName });
				}}
			>
				<Flex direction={"column"} gap={"8px"}>
					<FormControl>
						<FormLabel>First Name</FormLabel>
						<Input
							name="firstName"
							type="text"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							disabled={isLoading}
						/>
					</FormControl>
					<FormControl>
						<FormLabel>Last Name</FormLabel>
						<Input
							type="text"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
							disabled={isLoading}
						/>
					</FormControl>

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
						<Button disabled={isLoading} type="submit">
							{isLoading ? "loading" : "Register"}
						</Button>
						<Spacer />
					</Flex>
				</Flex>
			</form>
		</Box>
	);
};
