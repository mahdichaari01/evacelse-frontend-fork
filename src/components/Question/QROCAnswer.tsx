import React, { useCallback, useEffect, useRef, useState } from "react";
import { ScrollableBox } from "../Elements";

export function QROCAnswer(props: {
	answer: string;
	reveal: boolean;
	userinput: () => Promise<string>;
}) {
	const [value, setValue] = useState<string | null>(null);
	const CustomInput = useRef<HTMLSpanElement>(null);
	const setCaret = useCallback(
		(e: React.MouseEvent<HTMLElement>) => {
			if (
				CustomInput.current === null ||
				CustomInput.current.childNodes[0] === undefined ||
				e.target === CustomInput.current ||
				e.target === CustomInput.current?.childNodes[0]
			)
				return;
			CustomInput.current.focus();
			// this is a hack to set the caret at the end of the text
			let range = document.createRange();
			let sel = window.getSelection();
			range.setStart(
				CustomInput.current.childNodes[0] as Node,
				CustomInput.current.childNodes[0]?.textContent?.length as number
			);
			range.collapse(true);
			sel?.removeAllRanges();
			sel?.addRange(range);
		},
		[CustomInput]
	);
	useEffect(() => {
		if (CustomInput.current) {
			CustomInput.current.focus();
		}
		props.userinput().then((res) => {
			setValue(res);
		});
	}, [CustomInput, props]);

	return (
		<div
			className={`swap overflow-hidden w-full cursor-default ${
				props.reveal ? "" : "swap-active"
			}`}
		>
			<ScrollableBox
				onClick={setCaret}
				className="w-full swap-on rounded p-4 items-start min-h-[15.625rem] bg-clears text-darks"
			>
				<span className="font-extrabold align-middle">Votre réponse: </span>
				<span
					className="caret-islamic-green active:border-none border-none outline-none active:outline-none cursor-text"
					contentEditable
					suppressContentEditableWarning
					ref={CustomInput}
					// onInput={(e) => {
					// 	setValue(e.currentTarget.innerHTML);
					// }}
				>
					{value}
				</span>
			</ScrollableBox>
			<ScrollableBox
				className={`w-full swap-off rounded p-4 items-start min-h-[15.625rem] bg-islamic-green text-white ${
					props.reveal ? "" : "hidden"
				}`}
			>
				<div className="flex flex-col">
					<div className="text-3xl font-extrabold p-4">Réponse Correcte</div>
					<p className="text-lg">{props.answer}</p>
				</div>
			</ScrollableBox>
		</div>
	);
}
