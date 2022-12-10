import React from "react";
import { Link } from "react-router-dom";
import Icon from "../Icon";
import { NavLink } from "react-router-dom";
import { insert } from "../../../Testing/testing";
interface INavItem {
	to: string;
	text: string;
	icon: string;
}
function NavButton({ to, text, icon }: INavItem) {
	return (
		<NavLink
			className={({ isActive }) =>
				`flex w-full max-w-[4.375rem] flex-col items-center justify-center gap-2 rounded-sm bg-transparent py-2 text-darks hover:bg-base-300 active:bg-primary active:text-primary-content ${
					isActive ? "active:bg-primary active:text-primary-content" : ""
				}`
			}
			to={to}
		>
			<Icon name={icon} className="w-fit text-3xl leading-none" />
			<span className="text-xs font-medium leading-none">{text}</span>
		</NavLink>
	);
}
function LogoutButton() {
	return (
		<button className="flex w-full max-w-[4.375rem] flex-col items-center justify-center gap-2 justify-self-end rounded-sm bg-transparent py-2 text-sinopia hover:bg-base-300">
			<Icon name="logout" className="w-fit text-3xl leading-none" />
			<span className="text-xs font-medium leading-none">Logout</span>
		</button>
	);
}
export default function Navigation({
	className,
	items,
	direction,
}: {
	className?: string;
	items: INavItem[];
	direction: "horisontal" | "vertical";
}) {
	return (
		<nav
			className={`h-full w-full ${
				direction === "horisontal"
					? "flex flex-row justify-evenly"
					: "flex flex-col items-center justify-between"
			}`}
		>
			<ul
				className={`flex ${
					direction === "horisontal"
						? "w-full flex-row justify-evenly"
						: "h-full w-full flex-col items-center justify-center gap-3"
				} ${className}`}
			>
				{items.map((item, index) => (
					<NavButton key={index} {...item} />
				))}
			</ul>
			<LogoutButton />
		</nav>
	);
}

insert("Navigation", "Navigation Button", [
	{
		variant: "Default",
		element: (
			<div className="bg-base-100 p-10">
				<NavButton to="/Navigation%20Button/Default" text="Home" icon="home" />{" "}
			</div>
		),
	},
]);
insert("Navigation", "Navigation", [
	{
		variant: "horisontal",
		element: (
			<div className="m-4 flex w-[19rem] justify-center rounded bg-base-200 p-1">
				<Navigation
					items={[
						{ to: "/Navigation/Default", text: "Home", icon: "home" },

						{ to: "/Navigation/Default", text: "Library", icon: "book" },
						{ to: "/Navigation/Default", text: "Shop", icon: "local_mall" },
						{ to: "/Navigation/Default", text: "Favorite", icon: "star" },
					]}
					direction="horisontal"
				/>
			</div>
		),
	},
	{
		variant: "vertical",
		element: (
			<div className="m-4 flex h-[30rem] w-24 flex-col place-content-center items-center rounded bg-base-200 px-2 py-2">
				<Navigation
					items={[
						{ to: "/Navigation/Default", text: "Home", icon: "home" },
						{ to: "/Navigation/Default", text: "Library", icon: "book" },
						{ to: "/Navigation/Default", text: "Shop", icon: "local_mall" },
						{ to: "/Navigation/Default", text: "Favorite", icon: "star" },
					]}
					direction="vertical"
				/>
			</div>
		),
	},
]);
