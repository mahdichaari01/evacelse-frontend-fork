import { useUser, useLogout } from "@/lib/authContext";
import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";
import { Icon } from "../Elements";
import { useTitle } from "@/contexts/TitleContext";
import {
	Avatar,
	AvatarBadge,
	Center,
	Drawer,
	DrawerCloseButton,
	DrawerContent,
	DrawerOverlay,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverHeader,
	PopoverTrigger,
	Spinner,
	useDisclosure,
} from "@chakra-ui/react";
import { LogoutButton, NavBar, NavButton } from "../Navigation/Navigation";

export const TitleBar = (props: {
	routes?: { to: string; name: string; icon: string }[];
}) => {
	const matches = useMediaQuery("(min-width: 768px)");
	return matches ? (
		<RegularTitleBar />
	) : (
		<MobileTitleBar routes={props.routes} />
	);
};

const MobileTitleBar = (props: {
	routes?: { to: string; name: string; icon: string }[];
}) => {
	const userFn = useUser();
	const { data, isLoading: userLoading } = useQuery({
		queryKey: ["user"],
		queryFn: userFn,
	});
	const navigate = useNavigate();
	const logout = useLogout();
	const [loadingLogout, setLoadingLogout] = useState(false);
	const { title } = useTitle();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const drawerTriggerRef = useRef<HTMLButtonElement>(null);
	return (
		<div className="w-full h-full overflow-hidden flex flex-row justify-between items-center p-2">
			<button
				className="btn btn-circle text-darks-mid flex flex-row items-center"
				onClick={() => navigate(-1)}
			>
				<Icon name="arrow_back_ios_new" className="text-base" />
			</button>
			<h1 className="font-bold text-xl">{title}</h1>
			<button className="btn btn-circle" ref={drawerTriggerRef} onClick={onOpen}>
				<Icon name="menu" className="text-base" />
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
	const { title } = useTitle();
	return (
		<div className="w-full h-full overflow-hidden flex flex-row justify-between items-center px-8">
			<button
				className="text-darks-mid flex flex-row items-center group"
				onClick={() => navigate(-1)}
			>
				<Icon name="arrow_back_ios_new" className="text-base" />
				<span className="group-hover:underline"> Go back</span>
			</button>
			<h1 className="font-extrabold text-3xl">{title}</h1>
			<Menu placement="bottom-end" closeOnSelect={false}>
				<MenuButton>
					<div className="flex flex-row items-center gap-2">
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
