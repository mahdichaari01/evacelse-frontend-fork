import React, { PropsWithChildren } from "react";

export function AccordionContainer(props: PropsWithChildren<{}>) {
	return (
		<div className="w-full p-3 flex h-full flex-col overflow-hidden gap-2">
			{props.children}
		</div>
	);
}
