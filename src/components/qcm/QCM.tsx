import React from "react";

import Option from "./Option";
interface QCMData {
	number_of_questions?: number;
	index: number;
	question: string;
	answers: string[];
	correct_answer: number;
	next?: () => void;
	previous?: () => void;
	is_favorite: boolean;
	toggle_favorite?: () => void;
	is_answered: boolean;
}
export function QCM(props: QCMData) {
	const {
		number_of_questions,
		index,
		question,
		answers,
		correct_answer,
		next,
		previous,
		is_favorite,
		toggle_favorite,
		is_answered,
	} = props;
	return (
		<div className="grid w-full h-full auto-rows-auto place-content-center gap-[2.6rem] p-4 md:p-[2.6rem]">
			<div className="flex h-fit justify-between">
				<div className="h-fit w-fit rounded-sm bg-primary p-3 text-center font-medium text-base-100">
					<span className="hidden md:inline ">Question </span>
					<span className=" md:hidden ">Q </span>
					<span>
						{index}/{number_of_questions}
					</span>
				</div>

				<button
					className={`btn h-fit w-fit p-3 text-center font-medium ${
						is_favorite ? "bg-chinese-gold text-base-100" : "bg-base-300"
					}
					`}
				>
					<span className="material-symbols-rounded">star</span>
					<span className="ml-3 ">{is_favorite ? "enlever" : "ajouter"}</span>
				</button>
			</div>
			<p className="max- h-52 overflow-y-scroll rounded bg-darks  p-4 text-clears-tertiary md:h-40 md:p-8">
				<p className="cleanScrollbar h-full overflow-y-scroll">{question}</p>
			</p>
			<div className="cleanScrollbar max-h-52 overflow-y-scroll pr-1">
				<ul className="flex w-full flex-col gap-3">
					{answers.map((answer, index) => (
						<Option content={answer} index={index} />
					))}
				</ul>
			</div>
			<div className="flex justify-between">
				<NavButton onClick={() => {}}>
					<span className="material-symbols-rounded">arrow_back_ios_new</span>
					<span className="hidden md:inline">prècedant</span>
				</NavButton>
				<button className="btn-primary btn">
					<span>vérifier</span>
				</button>
				<NavButton onClick={() => {}}>
					<span className="hidden md:inline">suivant</span>
					<span className="material-symbols-rounded">arrow_forward_ios</span>
				</NavButton>
			</div>
		</div>
	);
}

function NavButton(props: { children: React.ReactNode; onClick: () => void }) {
	return (
		<button
			className="btn-outline btn-primary btn flex  h-fit w-fit flex-row  items-center justify-evenly gap-2 rounded-sm border-2 p-3 text-center font-medium md:w-40"
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
}
