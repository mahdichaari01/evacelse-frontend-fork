import Collapse from "@kunukn/react-collapse";
import React from "react";
import { ScrollableBox } from "@/components/Elements";
export function AccordionItemBody(props: {
	isOpen: boolean;
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<Collapse
			isOpen={props.isOpen}
			overflowOnExpanded
			className="overflow-y-scroll collapse-css-transition cleanScrollbar"
		>
			<div>{props.children}</div>
		</Collapse>
		// <div
		// 	className={`${props.className} transition-all h-fit duration-300 ${
		// 		props.isOpen ? "max-h-80" : "max-h-0"
		// 	} overflow-hidden`}
		// >
		// 	{props.children}
		// </div>
	);
}
