import React, { PropsWithChildren } from "react";

export function Notification(props: PropsWithChildren<{ className?: string }>) {
	return <div className={`toast`}>{props.children}</div>;
}
