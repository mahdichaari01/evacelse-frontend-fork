import React, { PropsWithChildren } from "react";
import { ScrollableBox } from "@/components";
import Option from "./Option";
export function QCMAnswer(
	props: PropsWithChildren<{
		answers: string[];
		correct_answers: number[];
		reveal: boolean;
	}>
) {
	const { answers, reveal, correct_answers: correct_answer } = props;
	const [selected, setSelected] = React.useState<number[]>([]);
	const toggleSelection = (index: number) => () => {
		if (selected.includes(index)) {
			setSelected(selected.filter((item) => item !== index));
		} else {
			setSelected([...selected, index]);
		}
	};
	const getOutline = (index: number) => {
		if (selected.includes(index)) {
			return true;
		}
		return false;
	};
	const getSelectedColor = (index: number) => {
		if (reveal) {
			if (correct_answer.includes(index)) {
				return "green";
			}
			if (selected.includes(index)) {
				return "red";
			}
		}
		return selected.includes(index) ? "black" : undefined;
	};
	return (
		<ScrollableBox className="w-full rounded">
			<ul className="flex w-full flex-col gap-3">
				{answers.map((answer, index) => (
					<Option
						content={answer}
						index={index}
						onClick={reveal ? () => {} : toggleSelection(index)}
						color={getSelectedColor(index)}
						outline={getOutline(index)}
					/>
				))}
			</ul>
		</ScrollableBox>
	);
}
