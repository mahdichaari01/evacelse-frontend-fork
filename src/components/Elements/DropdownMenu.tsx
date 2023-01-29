import React, { PropsWithChildren } from "react";

export function DropdownMenu(
	props: PropsWithChildren<{
		header: React.ReactNode;
		className?: string;
		top?: boolean;
	}>
) {
	return (
		<div
			className={`dropdown ${props.top ? "dropdown-top" : ""} w-full h-full ${
				props.className
			}`}
		>
			<label tabIndex={0} className="block h-full w-full">
				{props.header}
			</label>
			<ul
				tabIndex={0}
				className="dropdown-content menu max-h-[31.25rem] overflow-y-scroll cleanScrollbar my-2 p-2 shadow bg-base-100 rounded-box w-full min-w-fit"
			>
				{props.children}
			</ul>
		</div>
	);
}
