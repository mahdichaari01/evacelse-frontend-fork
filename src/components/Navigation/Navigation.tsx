import React, { ReactElement, ReactNode } from "react";
import { Icon } from "@/components";
import { NavLink } from "react-router-dom";

interface INavItem {
	to: string;
	name?: string;
	icon: string;
}

function NavButton({ to, name: text, icon }: INavItem) {
	text = text ? text : to;
	return (
		<NavLink
			className={({ isActive }) =>
				`flex w-full max-w-[4.375rem] flex-col items-center justify-center gap-2 rounded-sm bg-transparent py-2 text-darks hover:bg-clears-tertiary active:bg-primary active:text-primary-content ${
					isActive ? "bg-primary text-primary-content hover:bg-primary-focus" : ""
				}`
			}
			to={to}
		>
			<Icon name={icon} className="w-fit text-3xl leading-none" />
			<span className="text-xs font-medium leading-none">{text}</span>
		</NavLink>
	);
}
function LogoutButton({ onClick }: { onClick: () => void }) {
	return (
		<button
			onClick={onClick}
			className="flex w-full max-w-[4.375rem] flex-col items-center justify-center gap-2 justify-self-end rounded-sm bg-transparent py-2 text-sinopia hover:bg-base-300"
		>
			<Icon name="logout" className="w-fit text-3xl leading-none" />
			<span className="text-xs font-medium leading-none">Logout</span>
		</button>
	);
}
function NavBar({
	className,
	direction,
	LogoutButton,
	children,
}: {
	className?: string;
	children: ReactNode;
	direction: "horisontal" | "vertical";
	LogoutButton: ReactElement;
}) {
	return (
		<nav
			className={`h-full w-full ${
				direction === "horisontal"
					? "flex flex-row justify-evenly"
					: "flex flex-col items-center justify-between"
			}`}
		>
			<NavContainer direction={direction}>{children}</NavContainer>

			{LogoutButton}
		</nav>
	);
}
function NavContainer({
	direction,
	children,
}: {
	direction: "horisontal" | "vertical";
	children: ReactNode;
}) {
	switch (direction) {
		case "horisontal":
			return <>{children}</>;
		case "vertical":
			return (
				<ul className="flex h-full w-full flex-col items-center justify-center gap-3">
					{children}
				</ul>
			);
	}
}

export { NavButton, LogoutButton, NavBar };
