import React, { ReactNode } from "react";

export default function Layout(props: { children: ReactNode }) {
	return (
		<div
			style={{ minHeight: `${window.screen.height * 0.7}px` }}
			className="grid h-screen grid-rows-[1fr,80px] gap-5 overflow-hidden p-5 sm:grid-cols-[80px,1fr] sm:grid-rows-[80px,1fr] md:grid-cols-[90px,1fr] md:grid-rows-[90px,1fr]"
		>
			{props.children}
		</div>
	);
}
