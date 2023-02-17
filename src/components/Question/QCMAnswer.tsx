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
	return (
		<ScrollableBox className="w-full rounded">
			<ul className="flex w-full flex-col gap-3">
				{answers.map((answer, index) => (
					<Option
						content={answer}
						index={index}
						onClick={reveal ? () => {} : toggleSelection(index)}
						isSelected={selected.includes(index)}
						isCorrect={correct_answer.includes(index)}
						isRevealed={reveal}
					/>
				))}
			</ul>
		</ScrollableBox>
	);
}
