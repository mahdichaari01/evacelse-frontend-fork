import React, { ChangeEventHandler } from "react";
import { NavLink } from "react-router-dom";
import { CourseData } from "@/types";

export function CourseItem(props: { title: string; to: string }) {
	return (
		<NavLink
			to={props.to}
			className={({ isActive }) =>
				`flex flex-row items-center justify-between gap-4 rounded bg-clears px-4 py-5 hover:brightness-75 ${
					isActive ? "bg-darks text-white" : ""
				}`
			}
		>
			{/* <div
				className={`radial-progress shrink-0 max-lg:hidden ${
					active
						? "text-white"
						: data.progress > 60
						? "text-primary"
						: data.progress > 30
						? "text-warning"
						: "text-error"
				} `}
				style={
					{
						"--value": data.progress,
						"--size": "3.4rem",
						"--thickness": ".4rem",
					} as React.CSSProperties
				}
			>
				<span className="text-xs font-medium">
					{data.progress}
					<sup>%</sup>
				</span>
			</div> */}
			<div>
				<div className="mb-2 text-base font-medium leading-none line-clamp-2">
					{props.title}
				</div>
				{/* <div className="text-[.6rem] font-medium">
					{Object.values(data.content).reduce((a, b) => a + b, 0)} activités
				</div> */}
			</div>
		</NavLink>
	);
}
