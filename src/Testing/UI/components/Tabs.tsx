import React from "react";
import { NavLink } from "react-router-dom";
import { ITestVariant } from "../../testing";
export default function Tabs({ element }: { element: ITestVariant[] }) {
	return (
		<div className="tabs tabs-boxed fixed bottom-0 w-screen place-content-center rounded-none bg-darks-mid">
			{element.map((variant) => (
				<NavLink
					key={variant.variant}
					to={variant.variant}
					className={({ isActive }) =>
						[
							"tab-lg mt-1 text-base-300",
							"tab",
							isActive ? "tab-active text-darks" : "",
						]
							.filter(Boolean)
							.join(" ")
					}
				>
					{variant.variant}
				</NavLink>
			))}
		</div>
	);
}
