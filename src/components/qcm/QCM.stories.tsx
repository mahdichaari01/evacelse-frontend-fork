import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { QCM } from "./QCM";

export default {
	title: "Components/QCM",
	component: QCM,
	args: {
		number_of_questions: 30,
		index: 7,
		question: "What is the capital of France?",
		answers: ["Paris", "London", "Berlin", "Rome", "Madrid", "Moscow", "Beijing"],
		correct_answer: 0,

		is_favorite: true,

		is_answered: false,
	},
} as ComponentMeta<typeof QCM>;

const Template: ComponentStory<typeof QCM> = (args) => <QCM {...args} />;
export const Default = Template.bind({});
Default.decorators = [
	(Story) => (
		<div className="w-[700px] bg-clears-secondary overflow-hidden rounded cleanScrollbar">
			<Story />
		</div>
	),
];
