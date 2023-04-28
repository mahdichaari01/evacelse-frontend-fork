import React, { PropsWithChildren } from "react";
import { LogoutButton, NavBar, NavButton } from "../Navigation/Navigation";
import { useMediaQuery } from "usehooks-ts";

export function MainLayout(
	props: PropsWithChildren<{
		logout: () => void;
		routes: { to: string; name: string; icon: string }[];
	}>
) {
	const match = useMediaQuery("(min-width: 768px)");
	return (
		<div>
			<div id="navContainer">
				<NavBar
					direction={match ? "vertical" : "horisontal"}
					LogoutButton={<LogoutButton onClick={() => props.logout()} />}
				>
					{props.routes.map((route) => (
						<NavButton key={route.to} {...route} />
					))}
				</NavBar>
			</div>
			<div>
				<div id="titleBar"></div>
				<div id="main">{props.children}</div>
			</div>
		</div>
	);
}
