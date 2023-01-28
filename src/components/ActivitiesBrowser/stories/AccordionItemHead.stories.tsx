import { ComponentStory, ComponentMeta } from "@storybook/react";
import React, { useState } from "react";

import { AccordionItemHead } from "../AccordionItemHead";

export default {
	title: "Components/ActivitiesBrowser/Accordion/AccordionItemHead",
	component: AccordionItemHead,
	args: {
		title: "QCM",
		questions: 10,
		isActive: false,
	},
	argTypes: {
		onClick: { action: "clicked" },
	},
} as ComponentMeta<typeof AccordionItemHead>;

const Template: ComponentStory<typeof AccordionItemHead> = (args) => {
	return <AccordionItemHead {...args} />;
};

export const QCM = Template.bind({});
QCM.args = {};

export const QROC = Template.bind({});
QROC.args = {
	title: "QROC",
};

export const CasClinique = Template.bind({});
CasClinique.args = {
	title: "Cas Clinique",
};
