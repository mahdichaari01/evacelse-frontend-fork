import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { NavBar, LogoutButton, NavButton } from "../Navigation";

const testData = [
	{
		to: "/",
		text: "Home",
		icon: "home",
	},
	{
		to: "/library",
		text: "Library",
		icon: "book",
	},
	{
		to: "/shop",
		text: "Shop",
		icon: "local_mall",
	},
	{
		to: "/favorites",
		text: "Favorites",
		icon: "star",
	},
	{
		to: "/about",
		text: "About",
		icon: "info",
	},
	{
		to: "/contact",
		text: "Contact",
		icon: "mail",
	},
];

export default {
	title: "Components/Navigation/NavBar",
	component: NavBar,
	args: {
		LogoutButton: <LogoutButton onClick={() => {}} />,
	},
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Horisontal = Template.bind({});
Horisontal.args = {
	direction: "horisontal",
	children: testData
		.slice(0, 4)
		.map((item, index) => <NavButton key={index} {...item} />),
};
Horisontal.decorators = [
	(Story) => (
		<div className="w-full max-w-3xl h-20 bg-clears-secondary rounded py-2 px-1">
			<Story />
		</div>
	),
];

export const Vertical = Template.bind({});
Vertical.args = {
	direction: "vertical",
	children: testData
		.slice(0, 4)
		.map((item, index) => <NavButton key={index} {...item} />),
};
Vertical.decorators = [
	(Story) => (
		<div className="w-24 h-screen bg-clears-secondary rounded py-4">
			<Story />
		</div>
	),
];

export const Underflow = Template.bind({});
Underflow.args = {
	direction: "horisontal",
	children: testData
		.slice(0, 2)
		.map((item, index) => <NavButton key={index} {...item} />),
};
Underflow.decorators = [
	(Story) => (
		<div className="w-full max-w-lg h-24 bg-clears-secondary rounded py-4">
			<Story />
		</div>
	),
];

export const Overflow = Template.bind({});
Overflow.args = {
	direction: "horisontal",
	children: testData.map((item, index) => <NavButton key={index} {...item} />),
};
Overflow.decorators = [
	(Story) => (
		<div className="w-full cleanScrollbar max-w-lg h-24 bg-clears-secondary rounded overflow-auto py-3">
			<Story />
		</div>
	),
];
