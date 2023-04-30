import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
	EvaluationPageLayout,
	EvalsListContainer,
	QuestionContainer,
	QuestionListContainer,
} from "./EvaluationsPageLayouts";

export default {
	title: "Pages/EvaluationPageLayout",
	component: EvaluationPageLayout,
	args: {
		children: (
			<>
				<EvalsListContainer>
					<div className="w-full h-full ui-part"></div>
				</EvalsListContainer>
				<QuestionContainer>
					<div className="w-full h-full ui-part"></div>
				</QuestionContainer>
				<QuestionListContainer>
					<div className="w-full h-full ui-part"></div>
				</QuestionListContainer>
			</>
		),
	},
} as ComponentMeta<typeof EvaluationPageLayout>;

const Template: ComponentStory<typeof EvaluationPageLayout> = (args) => (
	<EvaluationPageLayout {...args} />
);

export const Default = Template.bind({});
Default.decorators = [
	(Story) => (
		<div className="w-screen h-screen">
			<Story />
		</div>
	),
];
