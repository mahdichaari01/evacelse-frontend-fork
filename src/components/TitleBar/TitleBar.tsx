import { useUser, useLogout } from "@/lib/authContext";
import { useQuery } from "@tanstack/react-query";
import { ReactNode, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";
import { useTitle } from "@/contexts/TitleContext";
import {
	Avatar,
	Center,
	Drawer,
	DrawerContent,
	DrawerOverlay,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Spinner,
	useDisclosure,
} from "@chakra-ui/react";
import { LogoutButton, NavBar, NavButton } from "../Navigation/Navigation";

export const TitleBar = (props: {
	routes?: { to: string; name: string; icon: ReactNode }[];
}) => {
	const matches = useMediaQuery("(min-width: 768px)");
	return matches ? (
		<RegularTitleBar />
	) : (
		<MobileTitleBar routes={props.routes} />
	);
};

const MobileTitleBar = (props: {
	routes?: { to: string; name: string; icon: ReactNode }[];
}) => {
	const userFn = useUser();
	const { data, isLoading: userLoading } = useQuery({
		queryKey: ["user"],
		queryFn: userFn,
	});
	const navigate = useNavigate();
	const logout = useLogout();
	const [loadingLogout, setLoadingLogout] = useState(false);
	const { title, button } = useTitle();

	const { isOpen, onOpen, onClose } = useDisclosure();
	const drawerTriggerRef = useRef<HTMLButtonElement>(null);
	return (
		<div className="w-full h-16 overflow-hidden flex flex-row justify-between items-center p-2">
			<div
				className={`w-full h-full flex flex-row items-center ${
					button ? "justify-between" : "justify-center"
				}`}
			>
				{button}
				<h1 className="font-extrabold text-3xl">
					{title === "" ? "Evacelse" : title}
				</h1>
			</div>
			<button className="btn btn-circle" ref={drawerTriggerRef} onClick={onOpen}>
				{/* <Icon name="menu" className="text-base" /> */}
				<MenuIcon />
			</button>
			<Drawer
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				finalFocusRef={drawerTriggerRef}
				size="menu"
			>
				<DrawerOverlay />
				<DrawerContent>
					<Center>
						<Avatar
							name={userLoading ? "" : `${data?.firstName} ${data?.lastName}`}
							borderRadius={"lg"}
							marginTop={"6px"}
							icon={<></>}
							bg={"linear-gradient(9.05deg, #FDF967 -23.87%, #FFD248 121.02%)"}
							size="md"
							onClick={() => navigate("/profile")}
						>
							{userLoading ? <Spinner /> : undefined}
						</Avatar>
					</Center>
					<NavBar
						direction="vertical"
						LogoutButton={
							loadingLogout ? (
								<Spinner />
							) : (
								<LogoutButton
									onClick={() => {
										setLoadingLogout(true);
										logout();
									}}
								/>
							)
						}
					>
						{props.routes &&
							props.routes.map((route) => <NavButton key={route.to} {...route} />)}
					</NavBar>
				</DrawerContent>
			</Drawer>
		</div>
	);
};

const RegularTitleBar = () => {
	const userFn = useUser();
	const { data, isLoading: userLoading } = useQuery({
		queryKey: ["user"],
		queryFn: userFn,
	});
	const navigate = useNavigate();
	const logout = useLogout();
	const [loadingLogout, setLoadingLogout] = useState(false);
	const { title, button } = useTitle();

	return (
		<div className="w-full h-full overflow-hidden flex flex-row justify-between items-center px-8">
			<div
				className={`w-full h-full flex flex-row items-center ${
					button ? "justify-between" : "justify-center"
				}`}
			>
				{button}
				<h1 className="font-extrabold text-3xl">
					{title === "" ? "Evacelse" : title}
				</h1>
			</div>
			<Menu placement="bottom-end" closeOnSelect={false}>
				<MenuButton className="shrink-0">
					<div className="flex flex-row items-center gap-2 shrink-0">
						{userLoading ? (
							<></>
						) : (
							<div className="font-bold text-darks-mid text-base leading-none flex flex-col items-end">
								<div className="font-medium">Welcome</div>

								<div>{data?.firstName + " " + data?.lastName}</div>
							</div>
						)}

						<Avatar
							name={userLoading ? "" : `${data?.firstName} ${data?.lastName}`}
							borderRadius={"md"}
							icon={<></>}
							bg={"linear-gradient(9.05deg, #FDF967 -23.87%, #FFD248 121.02%)"}
							size="md"
						>
							{userLoading ? <Spinner /> : undefined}
						</Avatar>
					</div>
				</MenuButton>
				<MenuList>
					<MenuItem
						onClick={() => {
							navigate("/profile");
						}}
					>
						Profile
					</MenuItem>
					<MenuItem
						onClick={() => {
							setLoadingLogout(true);
							logout();
						}}
					>
						{loadingLogout ? "Au revoir 👋" : "Deconnécter"}
					</MenuItem>
				</MenuList>
			</Menu>
		</div>
	);
};

const ChevronBackIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className="w-6 h-6"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M15.75 19.5L8.25 12l7.5-7.5"
		/>
	</svg>
);

const MenuIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className="w-6 h-6"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
		/>
	</svg>
);
