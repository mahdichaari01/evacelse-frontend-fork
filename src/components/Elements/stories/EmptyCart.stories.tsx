import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { EmptyCart } from "../EmptyCart";

export default {
	title: "Components/Elements/EmptyCart",
	component: EmptyCart,
	args: {},
} as ComponentMeta<typeof EmptyCart>;

const Template: ComponentStory<typeof EmptyCart> = (args) => <EmptyCart />;

export const Story = Template.bind({});
Story.args = {};
