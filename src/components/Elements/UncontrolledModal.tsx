import React, { PropsWithChildren, ReactNode } from "react";
import { createPortal } from "react-dom";

export function ControlledModal(
	props: PropsWithChildren<{
		className?: string;
		name: string;
		show?: boolean;
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
						defaultChecked={show}
						id={props.name}
						className="modal-toggle"
					/>

					<label className="modal cursor-pointer" htmlFor={props.name}>
						<label className={`modal-box relative ${props.className}`} htmlFor="">
							{props.children}
						</label>
					</label>
				</>,
				modalRoot
			)}
		</>
	);
}
