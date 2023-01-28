import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { LogoutButton } from "../Navigation";

export default {
	title: "Components/Navigation/LogoutButton",
	component: LogoutButton,
	argTypes: {
		onClick: { action: "clicked" },
	},
} as ComponentMeta<typeof LogoutButton>;

const Template: ComponentStory<typeof LogoutButton> = (args) => (
	<LogoutButton {...args} />
);

export const Story = Template.bind({});
Story.args = {};
