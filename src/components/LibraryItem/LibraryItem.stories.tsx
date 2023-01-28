import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { LibraryItem } from "./LibraryItem";

export default {
	title: "Components/LibraryItem",
	component: LibraryItem,
	args: {
		data: {
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
		icon: <div></div>,
	},
	argTypes: {
		onClick: { action: "onClick" },
	},
} as ComponentMeta<typeof LibraryItem>;

const Template: ComponentStory<typeof LibraryItem> = (args) => (
	<LibraryItem {...args} />
);

export const Story = Template.bind({});
Story.args = {};
