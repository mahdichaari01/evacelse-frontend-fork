import React from "react";

export function AccordionItemBody(props: {
	isOpen: boolean;
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div
			className={`${props.className} transition-all duration-300 ${
				props.isOpen ? "" : "h-0"
			} overflow-hidden`}
		>
			{props.children}
		</div>
	);
}
