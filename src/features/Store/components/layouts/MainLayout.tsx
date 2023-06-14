import { PropsWithChildren } from "react";

export const MainLayout = (props: PropsWithChildren) => (
	<div className="w-full h-full grid grid-cols-[1fr,23rem] gap-uigap">
		{props.children}
	</div>
);
