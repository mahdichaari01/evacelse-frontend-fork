import React, { ReactElement, ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface INavItem {
	to: string;
	name?: string;
	icon: ReactNode;
}

function NavButton({ to, name: text, icon }: INavItem) {
	text = text ? text : to;
	return (
		<NavLink
			className={({ isActive }) =>
				`flex w-full max-w-[4.375rem] flex-col items-center justify-center gap-2 rounded-sm bg-transparent py-2 text-darks hover:bg-clears-tertiary active:bg-primary active:text-primary-content ${
					isActive ? "text-primary" : ""
				}`
			}
			to={to}
		>
			{/* <Icon name={icon} className="w-fit text-3xl leading-none" /> */}
			{icon}
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
			<LogoutIcon className="w-fit text-3xl leading-none" />
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

const LogoutIcon = (props: { className?: string }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={2}
		stroke="currentColor"
		className={`w-6 h-6 ${props.className}`}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
		/>
	</svg>
);
