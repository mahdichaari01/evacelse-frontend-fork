import React, { PropsWithChildren } from "react";
import { LogoutButton, NavBar, NavButton } from "../Navigation/Navigation";
import { useMediaQuery } from "usehooks-ts";

import { ScrollableBox } from "../Elements";
import { TitleBar } from "../TitleBar/TitleBar";

type MainLayoutProps = PropsWithChildren<{
	logout: () => void;
	routes: { to: string; name: string; icon: string }[];
}>;

export function MainLayout(props: MainLayoutProps) {
	const match = useMediaQuery("(min-width: 768px)");
	return match ? <WideMainLayout {...props} /> : <NarrowMainLayout {...props} />;
}

const NarrowMainLayout = (props: MainLayoutProps) => {
	return (
		<ScrollableBox className="w-screen h-screen bg-clears-secondary">
			<div
				id="menuBar"
				className="sticky w-[90%] bg-clears h-fit rounded-full drop-shadow-md z-20 top-3 my-3 mx-auto overflow-hidden"
			>
				<TitleBar routes={props.routes} />
			</div>
			<div id="mainContent">{props.children}</div>
		</ScrollableBox>
	);
};
const WideMainLayout = (props: MainLayoutProps) => {
	return (
		<div className="w-screen h-screen min-h-[43.75rem] flex flex-row p-5 gap-5 bg-clears">
			<div
				id="navContainer"
				className="h-full w-20 rounded bg-clears-secondary shadow-inner p-2"
			>
				<NavBar
					direction="vertical"
					LogoutButton={<LogoutButton onClick={() => props.logout()} />}
				>
					{props.routes.map((route) => (
						<NavButton key={route.to} {...route} />
					))}
				</NavBar>
			</div>
			<div className="w-full h-full overflow-hidden flex flex-col gap-0 md:gap-5 ">
				<div
					id="titleBarContainer"
					className="h-24 rounded bg-clears-secondary shadow-inner"
				>
					<TitleBar />
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
};
