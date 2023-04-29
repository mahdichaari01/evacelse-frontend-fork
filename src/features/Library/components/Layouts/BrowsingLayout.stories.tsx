import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { BrowsingLayout } from "./BrowsingLayout";

export default {
	title: "Library/BrowsingLayout",
	component: BrowsingLayout,
	args: {
		loading: true,
	},
} as ComponentMeta<typeof BrowsingLayout>;

const Template: ComponentStory<typeof BrowsingLayout> = (args) => (
	<BrowsingLayout {...args} />
);

export const Story = Template.bind({});
Story.args = {};
Story.decorators = [
	(Story) => (
		<div className="w-full h-[43.75rem] bg-clears-secondary">
			<Story />
		</div>
	),
];
