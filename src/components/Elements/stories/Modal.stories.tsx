import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { Modal } from "../Modal";

export default {
	title: "Elements/Modal",
	component: Modal,
	args: {
		name: "modal1",
		show: false,
		children: (
			<>
				<h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
				<p className="py-4">
					You've been selected for a chance to get one year of subscription to use
					Wikipedia for free!
				</p>
			</>
		),
	},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Hidden = Template.bind({});
Hidden.args = {};

export const Visible = Template.bind({});
Visible.args = {
	show: true,
};

export const CustomClassNames = Template.bind({});
CustomClassNames.args = {
	className:
		"w-[13rem] h-[13rem] overflow-scroll bg-islamic-green text-white cleanScrollbar",
	show: true,
};
