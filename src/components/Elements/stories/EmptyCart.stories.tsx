import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { EmptyCart } from "../../../features/Store/components/EmptyCart";

export default {
	title: "Elements/EmptyCart",
	component: EmptyCart,
	args: {},
} as ComponentMeta<typeof EmptyCart>;

const Template: ComponentStory<typeof EmptyCart> = (args) => <EmptyCart />;

export const Story = Template.bind({});
Story.args = {};
