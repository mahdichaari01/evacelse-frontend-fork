import React, { useEffect, useRef, useState } from "react";
import { ScrollableBox } from "../Elements";

export function QROCAnswer(props: { answer: string; reveal: boolean }) {
	const [value, setValue] = useState<string | null>("");
	const CustomInput = useRef<HTMLSpanElement>(null);
	useEffect(() => {
		if (CustomInput.current) {
			CustomInput.current.focus();
		}
		console.log("QROCAnswer mounted");
	}, []);

	return (
		<div className={`swap overflow-hidden ${props.reveal ? "swap-active" : ""}`}>
			<ScrollableBox className="w-full swap-off rounded p-4 items-start min-h-[15.625rem] bg-islamic-green text-white">
				<div className="h-full flex flex-col">
					<div className="text-3xl font-extrabold p-4">Réponse Correcte</div>
					<div className="h-full flex flex-col justify-center text-lg">
						<p>{props.answer}</p>
					</div>
				</div>
			</ScrollableBox>
			<ScrollableBox
				onClick={() => {
					if (CustomInput.current) {
						CustomInput.current.focus();
					}
				}}
				className="w-full swap-on rounded p-4 items-start min-h-[15.625rem] bg-clears text-darks"
			>
				<span className="font-extrabold align-middle">Votre réponse: </span>
				<span
					className="caret-islamic-green active:border-none border-none outline-none active:outline-none"
					contentEditable
					suppressContentEditableWarning
					ref={CustomInput}
					onInput={(e) => {
						setValue(e.currentTarget.innerHTML);
					}}
				></span>
			</ScrollableBox>
		</div>
	);
}
