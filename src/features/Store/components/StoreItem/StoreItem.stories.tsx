import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { StoreItem } from "./StoreItem";

export default {
	title: "Components/StoreItem",
	component: StoreItem,
	args: {
		data: {
			name: "DCEM 2",
			price: 20,
			id: 1,
		},
	},
	argTypes: {
		addToCart: { action: "addToCart" },
		moreDetails: { action: "moreDetails" },
	},
} as ComponentMeta<typeof StoreItem>;

const Template: ComponentStory<typeof StoreItem> = (args) => (
	<div className="w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
		<StoreItem {...args} />
		<StoreItem {...args} />
		<StoreItem {...args} />
		<StoreItem {...args} />
		<StoreItem {...args} />
		<StoreItem {...args} />
	</div>
);

export const Story = Template.bind({});
Story.args = {};
