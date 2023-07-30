import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { QCM } from "./QCM";

export default {
	title: "Components/QCM",
	component: QCM,
	args: {
		number_of_questions: 30,
		index: 7,
		question:
			"A la fin de la spermatogenèse, le nombre de spermatozoïdes obtenu est :",
		answers: [
			"quatre fois le nombre de spermatocytes I",
			"égal au nombre des spermatides I",
			"le double du nombre de spermatocytes I",
			"le double du nombre de spermatides",
			"Je ne sais pas.",
		],
		correct_answer: [3, 0],

		is_favorite: false,

		is_answered: false,
	},
} as ComponentMeta<typeof QCM>;

const Template: ComponentStory<typeof QCM> = (args) => <QCM {...args} />;
export const Default = Template.bind({});
Default.decorators = [
	(Story) => (
		<div className="grid grid-rows-[3.125rem,minmax(0%,100%)] gap-2 grid-cols-1 w-full max-w-[62.5rem] bg-clears rounded-sm h-[800px]">
			<div className="bg-clears-secondary w-full h-full rounded "></div>
			<div className="rounded max-h-full bg-clears-secondary">
				<Story />
			</div>
		</div>
	),
];
