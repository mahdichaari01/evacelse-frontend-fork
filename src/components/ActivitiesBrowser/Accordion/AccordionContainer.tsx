import React, { PropsWithChildren } from "react";

export function AccordionContainer(props: PropsWithChildren<{}>) {
	return (
		<div className="w-80 p-3 flex h-[37.5rem] flex-col rounded-sm bg-clears-secondary">
			{props.children}
		</div>
	);
}
