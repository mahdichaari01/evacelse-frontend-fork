import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { NavButton } from "../Navigation";

export default {
	title: "Components/Navigation/NavButton",
	component: NavButton,
	args: {
		to: "/",
		name: "Home",
		icon: "home",
	},
} as ComponentMeta<typeof NavButton>;

const Template: ComponentStory<typeof NavButton> = (args) => (
	<NavButton {...args} />
);

export const Story = Template.bind({});
Story.args = {};
