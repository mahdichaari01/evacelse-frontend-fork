import { Icon } from "@/components/Elements";
import React from "react";

export function BrowsingBarButton(props: {
	title: string;
	subtitle?: string;
	up?: boolean;
	arrow?: boolean;
}) {
	const up = props.up ?? true;
	const arrow = props.arrow ?? false;
	return (
		<div className="h-full w-full flex flex-row justify-between bg-clears md:bg-clears-secondary cursor-pointer rounded active:scale-105 hover:brightness-90 transition-all duration-75">
			<div className="h-full max-w-full flex flex-col basis-full shrink-1 break-all break-words justify-center gap-1 items-start px-2 grow-0">
				<div
					className={`text-xs w-full font-medium text-darks-mid line-clamp-1 overflow-ellipsis grow-0`}
				>
					{props.title}
				</div>
				<div className="text-[.625rem] w-full text-darks-low line-clamp-2 leading-none">
					{props.subtitle}
				</div>
			</div>
			{arrow ? (
				<div className="h-full hover:brightness-90 select-none w-8 rounded flex bg-clears-tertiary justify-center items-center text-clears-secondary">
					<Icon
						className="text-3xl leading-none"
						name={up ? "expand_less" : "expand_more"}
					/>
				</div>
			) : (
				<></>
			)}
		</div>
	);
}
