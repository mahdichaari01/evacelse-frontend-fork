import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { LibraryItem } from "./LibraryItem";

export default {
	title: "Library/LibraryItem",
	component: LibraryItem,
	args: {
		name: "Tochsologie",
		evaluationsCount: 2,
		sessionsCount: 30,
	},
	argTypes: {
		onEvaluationClick: { action: "clicked" },
		onSessionClick: { action: "clicked" },
	},
} as ComponentMeta<typeof LibraryItem>;

const Template: ComponentStory<typeof LibraryItem> = (args) => (
	<LibraryItem {...args} />
);

export const Story = Template.bind({});
Story.args = {};
