import React, { ReactNode } from "react";
import { JsxElement } from "typescript";
import Navigation from "../components/nav/Navigation";
import StatusBar from "../components/status/StatusBar";

interface LayoutProps {
	children: ReactNode | null;
}
export default function Layout({ children }: LayoutProps) {
	return (
		<div className="h-screen w-screen overflow-hidden bg-primary">
			<StatusBar />
			<div>
				<Navigation />
				<div>{children ? children : "NO CHILDREN"}</div>
			</div>
		</div>
	);
}
