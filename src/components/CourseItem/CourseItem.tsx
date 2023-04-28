import React, { ChangeEventHandler } from "react";

import { CourseData } from "@/types";

export function CourseItem({
	group = "courses",
	data,
	active = false,
	onChange,
}: {
	group?: string;
	data: CourseData;
	active?: boolean;
	onChange?: ChangeEventHandler<HTMLInputElement>;
}) {
	return (
		<label>
			<input
				type="radio"
				name={group}
				value={data.id}
				checked={active}
				className="hidden"
				onChange={onChange}
			/>
			<div
				className={`flex flex-row items-center justify-between gap-4 rounded bg-base-200 px-4 py-5 hover:brightness-75 ${
					active ? "bg-darks text-white" : ""
				}`}
			>
				<div
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
				</div>
				<div>
					<div className="mb-2 text-base font-medium leading-none line-clamp-2">
						{data.title}
					</div>
					<div className="text-[.6rem] font-medium">
						{Object.values(data.content).reduce((a, b) => a + b, 0)} activités
					</div>
				</div>
			</div>
		</label>
	);
}
