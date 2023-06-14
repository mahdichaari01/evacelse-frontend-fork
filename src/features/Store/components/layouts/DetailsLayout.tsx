import { PropsWithChildren } from "react";

export const DetailsLayout = (props: PropsWithChildren) => (
	<div className="w-full h-full md:ui-part py-11 px-7 sm:px-11 flex flex-col gap-8 items-center justify-between">
		{props.children}
	</div>
);
