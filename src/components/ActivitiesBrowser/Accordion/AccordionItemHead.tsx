import React from "react";
import { activitiesIcons } from "@/assets";
import { Icon } from "@/components";

export function AccordionItemHead(props: {
	title: "QCM" | "QROC" | "Cas Clinique";
	onClick: () => void;
	questions: number;
	isActive: boolean;
}) {
	return (
		<div
			className={`w-full mb-2 rounded transition-all h-20 px-5 py-4 flex cursor-pointer flex-row justify-between items-center ${
				props.isActive ? "bg-darks text-white" : "bg-clears text-darks"
			}`}
			onClick={props.onClick}
		>
			<div className="flex flex-row gap-4">
				<img
					className={`object-contain w-10 ${props.isActive ? "invert" : ""}`}
					src={activitiesIcons[props.title]}
					alt={props.title}
				/>
				<div>
					<div className="font-semibold text-xl">{props.title}</div>
					<div className="font-base text-[.625rem]">{props.questions} questions</div>
				</div>
			</div>
			<Icon
				className={`text-3xl leading-none transition-all ${
					props.isActive ? "rotate-180" : ""
				}`}
				name="expand_more"
			/>
		</div>
	);
}
