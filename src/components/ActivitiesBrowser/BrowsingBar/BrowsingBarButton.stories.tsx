import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { BrowsingBarButton } from "./BrowsingBarButton";

export default {
	title: "Components/ActivitiesBrowser/BrowsingBar/Button",
	component: BrowsingBarButton,
	args: {
		title: "Title",
		subtitle: "Subtitle",
	},
	decorators: [
		(Story) => (
			<div className="h-16 w-28">
				<Story />
			</div>
		),
	],
} as ComponentMeta<typeof BrowsingBarButton>;

const Template: ComponentStory<typeof BrowsingBarButton> = (args) => (
	<BrowsingBarButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
	title: "Title",
	subtitle: "Subtitle",
};

export const Up = Template.bind({});
Up.args = {
	title: "Title",
	subtitle: "Subtitle",
	up: true,
};

export const Down = Template.bind({});
Down.args = {
	title: "Title",
	subtitle: "Subtitle",
	up: false,
};

export const Arrow = Template.bind({});
Arrow.args = {
	title: "Title",
	subtitle: "Subtitle",
	arrow: true,
};

export const UpArrow = Template.bind({});
UpArrow.args = {
	title: "Title",
	subtitle: "Subtitle",
	up: true,
	arrow: false,
};

export const NoSubtitle = Template.bind({});
NoSubtitle.args = {
	title: "Title",
	subtitle: undefined,
};
