import { ComponentStory, ComponentMeta } from "@storybook/react";
import React, { useState } from "react";

import { CourseItem } from "./CourseItem";
import { CourseData } from "@/types";
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

export default {
	title: "Components/CourseItem",
	component: CourseItem,
	args: {
		group: "courses",
	},
	argTypes: {
		onChange: { action: "onChange" },
	},
} as ComponentMeta<typeof CourseItem>;

const Template: ComponentStory<typeof CourseItem> = (args) => (
	<CourseItem {...args} />
);

export const Active = Template.bind({});
Active.args = {
	data: testData[0],
	active: true,
};
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

export const Inactive = Template.bind({});
Inactive.args = {
	data: testData[0],
	active: false,
};
Inactive.decorators = [
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
