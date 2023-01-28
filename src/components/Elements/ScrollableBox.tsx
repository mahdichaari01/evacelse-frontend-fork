import React from "react";
//create a scrollable div with padding
export function ScrollableBox({
	children,
	className,
}: {
	className: string;
	children?: React.ReactNode;
}) {
	return (
		<div
			className={`${className} overflow-y-scroll cleanScrollbar h-full w-full p-4 scrollboxShadows`}
		>
			{children}
		</div>
	);
}
