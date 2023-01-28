import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { StoreItem } from "./StoreItem";

export default {
	title: "Components/StoreItem",
	component: StoreItem,
	args: {
		data: {
			title: "title",
			price: 20,
			content: {
				cours: 20,
				qcm: 20,
				qroc: 20,
				casClinique: 20,
			},
		},
	},
	argTypes: {
		addToCart: { action: "addToCart" },
		moreDetails: { action: "moreDetails" },
	},
} as ComponentMeta<typeof StoreItem>;

const Template: ComponentStory<typeof StoreItem> = (args) => (
	<StoreItem {...args} />
);

export const Story = Template.bind({});
Story.args = {};
