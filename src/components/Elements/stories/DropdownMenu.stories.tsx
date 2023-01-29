import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { DropdownMenu } from "../DropdownMenu";
import { CourseItem } from "@/components";
import { AccordionItemHead } from "@/components/ActivitiesBrowser/Accordion/AccordionItemHead";
const testData = [
	{
		id: 1,
		title: "Amenotherapie dans la medecine",
		progress: 45,
		content: {
			qcm: 45,
			qroc: 45,
			casClinique: 45,
			cours: 45,
		},
	},
	{
		id: 2,
		title: "Amenotherapie dans la medecine",
		progress: 45,
		content: {
			qcm: 90,
			qroc: 45,
			casClinique: 45,

			cours: 45,
		},
	},
	{
		id: 3,
		title: "Amenotherapie dans la medecine",
		progress: 45,
		content: {
			qcm: 1,
			qroc: 45,
			casClinique: 45,
			cours: 45,
		},
	},
];
const TestingChild = () => {
	const [active, setActive] = React.useState(testData[0].id);
	return (
		<div className="flex flex-col gap-2">
			{testData.map((item) => (
				<CourseItem
					key={item.id}
					active={active === item.id}
					data={item}
					onChange={() => setActive(item.id)}
				/>
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
