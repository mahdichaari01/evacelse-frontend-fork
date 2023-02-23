import React from "react";
import { ScrollableBox } from "../Elements";

export function QuestionStatement(props: { content: string }) {
	return (
		<>
			<ScrollableBox className="w-full shrink-0 max-h-[40%] text-white bg-darks rounded p-5">
				{props.content.split("\n").map((p, index) => (
					<p key={index}>{p}</p>
				))}
			</ScrollableBox>
		</>
	);
}
