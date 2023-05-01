import React, { PropsWithChildren } from "react";
import { Link, To } from "react-router-dom";
import { ControlledModal as Modal, Icon } from "@/components";

export default function QuestionLayout(
	props: PropsWithChildren<{
		number_of_questions: number;
		index: number;
		is_favorite: boolean;
		next?: To;
		previous?: To;
		verify: () => void;
		attachment?: string;
	}>
) {
	const [showModal, setShowModal] = React.useState(false);
	return (
		<div className="flex w-full h-full justify-between items-center flex-col gap-5 p-1 md:p-[2.6rem]">
			<div className="flex w-full justify-between h-[3.125rem]">
				<div className="h-fit w-fit rounded-sm bg-primary p-3 text-center font-medium text-base-100">
					<span className="hidden md:inline ">Question </span>
					{/* <span className=" md:hidden ">Q </span> */}
					<span>
						{props.index}/{props.number_of_questions}
					</span>
				</div>
				{props.attachment !== undefined ? (
					<>
						{props.attachment !== undefined ? (
							<button
								className=" bg-clears text-darks rounded-sm gap-1 flex-row items-center btn"
								onClick={() => setShowModal(true)}
							>
								<Icon name="imagesmode" />
								<span className="max-md:hidden">ANNEXE</span>
							</button>
						) : null}
						<Modal
							show={showModal}
							hide={() => setShowModal(false)}
							name={"attachment" + (Math.random() + 1).toString(36).substring(7)}
						>
							<img src={props.attachment} alt="attachment" />
						</Modal>
					</>
				) : null}
				<button
					className={`btn h-fit w-fit p-3 text-center font-medium ${
						props.is_favorite ? "bg-chinese-gold text-base-100" : "bg-base-300"
					}
					`}
				>
					<span className="material-symbols-rounded">star</span>
					<span className="ml-3 max-md:hidden">
						{props.is_favorite ? "enlever" : "ajouter"}
					</span>
				</button>
			</div>
			<div className="flex flex-col w-full justify-evenly h-full gap-3 overflow-hidden">
				{props.children}
			</div>
			<div className="flex justify-between items-center w-full h-[4.125rem]">
				<NavButton
					to={props.previous || "."}
					disabled={props.previous ? false : true}
				>
					<span className="material-symbols-rounded">arrow_back_ios_new</span>
					<span className="hidden md:inline">prècedant</span>
				</NavButton>

				<button className="btn-primary btn" onClick={props.verify}>
					<span>vérifier</span>
				</button>

				<NavButton to={props.next || "."} disabled={props.next ? false : true}>
					<span className="hidden md:inline">suivant</span>
					<span className="material-symbols-rounded">arrow_forward_ios</span>
				</NavButton>
			</div>
		</div>
	);
}
function NavButton(props: {
	children: React.ReactNode;
	to: To;
	disabled?: boolean;
}) {
	return (
		<Link
			className={`btn-outline btn-primary btn flex  h-fit w-fit flex-row  items-center justify-evenly gap-2 rounded-sm border-2 p-3 text-center font-medium md:w-40 ${
				props.disabled ? "btn-disabled opacity-50 cursor-not-allowed" : ""
			}`}
			to={props.to}
		>
			{props.children}
		</Link>
	);
}
