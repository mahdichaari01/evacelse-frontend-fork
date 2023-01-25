import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import App from "@/App";

export default {
	title: "Components/App",
	component: App,
	args: {},
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App />;

export const Story = Template.bind({});
Story.args = {};
