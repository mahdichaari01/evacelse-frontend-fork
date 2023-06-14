import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { CartItem } from "./CartItem";

export default {
	title: "Components/CartItem",
	component: CartItem,
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
		removeItem: { action: "removeItem" },
		moreDetails: { action: "moreDetails" },
	},
	decorators: [
		(Story) => (
			<div style={{ width: "100%", maxWidth: "300px" }}>
				<Story />
			</div>
		),
	],
} as ComponentMeta<typeof CartItem>;

const Template: ComponentStory<typeof CartItem> = (args) => (
	<CartItem {...args} />
);

export const Story = Template.bind({});
Story.args = {};
