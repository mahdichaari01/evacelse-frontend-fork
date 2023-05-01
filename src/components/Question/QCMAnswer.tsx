import React, { PropsWithChildren } from "react";
import { ScrollableBox } from "@/components";
import Option from "./Option";
export function QCMAnswer(
	props: PropsWithChildren<{
		answers: string[];
		correct_answers: number[];
		reveal: boolean;
		questionID: string;
	}>
) {
	const { answers, reveal, correct_answers: correct_answer, questionID } = props;
	const [selected, setSelected] = React.useState<number[]>([]);
	const toggleSelection = (index: number) => () => {
		if (selected.includes(index)) {
			setSelected(selected.filter((item) => item !== index));
		} else {
			setSelected([...selected, index]);
		}
	};
	React.useEffect(() => {
		setSelected([]);
	}, [questionID]);
	return (
		<ScrollableBox className="w-full rounded">
			<ul className="flex w-full flex-col gap-[.625rem]">
				{answers.map((answer, index) => (
					<Option
						key={index}
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
