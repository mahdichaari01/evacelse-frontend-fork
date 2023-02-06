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
			"Une femme de 33 ans présente une cellulite au dos  hello world ggggggggg",
		answers: [
			"Une coloration de Gram du liquide sérosanguinolent qui s'échappe de la plaie contient des polynucléaires neutrophiles",
			"Une coloration de Gram du liquide sérosanguinolent qui s'échappe de la plaie contient des polynucléaires neutrophiles",
			"Une coloration de Gram du liquide sérosanguinolent qui s'échappe de la plaie contient des polynucléaires neutrophiles",
			"Une coloration de Gram du liquide sérosanguinolent qui s'échappe de la plaie contient des polynucléaires neutrophiles",
			"Une coloration de Gram du liquide sérosanguinolent qui s'échappe de la plaie contient des polynucléaires neutrophiles",
			"Une coloration de Gram du liquide sérosanguinolent qui s'échappe de la plaie contient des polynucléaires neutrophiles",
			"Une coloration de Gram du liquide sérosanguinolent qui s'échappe de la plaie contient des polynucléaires neutrophiles",
		],
		correct_answer: [1, 3],

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
