import React, { PropsWithChildren } from "react";

export function MainLayout({ children }: PropsWithChildren) {
	return (
		<div>
			<h1>MainLayout</h1>
			{children}
			<h1>Footer</h1>
		</div>
	);
}
