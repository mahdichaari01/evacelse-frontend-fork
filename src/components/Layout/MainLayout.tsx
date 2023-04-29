import React, { PropsWithChildren } from "react";
import { LogoutButton, NavBar, NavButton } from "../Navigation/Navigation";
import { useMediaQuery } from "usehooks-ts";
import {
	Avatar,
	AvatarBadge,
	Button,
	Flex,
	Heading,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Spacer,
} from "@chakra-ui/react";

export function MainLayout(
	props: PropsWithChildren<{
		logout: () => void;
		routes: { to: string; name: string; icon: string }[];
	}>
) {
	const match = useMediaQuery("(min-width: 768px)");
	return (
		<div
			className="w-screen min-h-[43.75rem] flex max-md:flex-col-reverse md:flex-row p-5 gap-5 bg-clears"
			style={{ height: `${window.innerHeight}px` }}
		>
			<div
				id="navContainer"
				className="w-full h-fit md:h-full md:w-20 rounded bg-clears-secondary shadow-inner p-2"
			>
				<NavBar
					direction={match ? "vertical" : "horisontal"}
					LogoutButton={<LogoutButton onClick={() => props.logout()} />}
				>
					{props.routes.map((route) => (
						<NavButton key={route.to} {...route} />
					))}
				</NavBar>
			</div>
			<div className="max-md:bg-clears-secondary max-md:rounded w-full h-full overflow-hidden flex flex-col gap-0 md:gap-5 ">
				<div
					id="titleBarContainer"
					className="h-24 rounded bg-clears-secondary shadow-inner"
				>
					<Flex alignItems={"center"} className="p-5">
						<Spacer />
						<Heading size={"lg"}>Title Bar</Heading>
						<Spacer />
						<Menu>
							<MenuButton
								as={Button}
								rightIcon={
									<Avatar boxSize={"1.875rem"}>
										<AvatarBadge boxSize=".8125rem" bg="green.500" />
									</Avatar>
								}
							>
								User
							</MenuButton>
							<MenuList>
								<MenuItem>Logout</MenuItem>
								<MenuItem>Settings</MenuItem>
							</MenuList>
						</Menu>
					</Flex>
				</div>
				<div
					id="main"
					className="h-full flex-grow-0 overflow-hidden rounded bg-clears-secondary"
				>
					{props.children}
				</div>
			</div>
		</div>
	);
}
