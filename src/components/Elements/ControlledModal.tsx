import React, { PropsWithChildren, ReactNode } from "react";
import { createPortal } from "react-dom";

export function ControlledModal(
	props: PropsWithChildren<{
		className?: string;
		name: string;
		show?: boolean;
		hide?: () => void;
	}>
) {
	const modalRoot = document.createElement("div");
	modalRoot.setAttribute("id", props.name);
	//append the div to the body
	document.body.appendChild(modalRoot);
	React.useEffect(() => {
		//ccreate a div element to render the modal

		return () => {
			document.body.removeChild(modalRoot);
		};
	}, []);
	const show = props.show ?? true;
	return (
		<>
			{createPortal(
				<>
					<input
						type="checkbox"
						checked={show}
						id={props.name}
						className="modal-toggle"
					/>

					<div className="modal" onClick={props.hide}>
						<div className={`modal-box relative ${props.className}`}>
							{props.children}
						</div>
					</div>
				</>,
				modalRoot
			)}
		</>
	);
}
