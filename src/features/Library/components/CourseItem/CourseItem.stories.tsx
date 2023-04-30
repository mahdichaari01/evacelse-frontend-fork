import { ComponentStory, ComponentMeta } from "@storybook/react";
import React, { useState } from "react";

import { CourseItem } from "./CourseItem";
import { CourseData } from "@/types";
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

export default {
	title: "Components/CourseItem",
	component: CourseItem,
	args: testData[0],
	argTypes: {
		onChange: { action: "onChange" },
	},
} as ComponentMeta<typeof CourseItem>;

const Template: ComponentStory<typeof CourseItem> = (args) => (
	<CourseItem {...args} />
);

export const Active = Template.bind({});
Active.decorators = [
	(Story) => {
		return (
			<div
				style={{
					width: "16.4375rem",
				}}
			>
				<Story />
			</div>
		);
	},
];
