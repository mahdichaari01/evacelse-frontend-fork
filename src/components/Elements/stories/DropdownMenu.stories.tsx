import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { DropdownMenu } from "../DropdownMenu";
import { CourseItem } from "@/components";
import { AccordionItemHead } from "@/components/ActivitiesBrowser/Accordion/AccordionItemHead";
const testData = [
	{
		title: "Amenotherapie dans la medecine",
		to: "1",
	},
	{
		title: "Amenotherapie dans la medecine",
		to: "2",
	},
	{
		title: "Amenotherapie dans la medecine",
		to: "3",
	},
];
const TestingChild = () => {
	return (
		<div className="flex flex-col gap-2">
			{testData.map((item) => (
				<CourseItem {...item} />
			))}
		</div>
	);
};

export default {
	title: "Elements/DropdownMenu",
	component: DropdownMenu,
	args: {
		className: "w-80",
		header: (
			<AccordionItemHead
				title="QCM"
				questions={30}
				isActive={false}
				onClick={() => {}}
			/>
		),
	},

	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof DropdownMenu>;

const Template: ComponentStory<typeof DropdownMenu> = (args) => (
	<DropdownMenu {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
	children: <TestingChild />,
};

export const Top = Template.bind({});
Top.args = {
	children: <TestingChild />,
	top: true,
};
Top.decorators = [
	(Story) => (
		<div className="min-h-screen flex flex-col justify-end">
			<Story />
		</div>
	),
];
