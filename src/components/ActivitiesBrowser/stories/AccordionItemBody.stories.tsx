import { ComponentStory, ComponentMeta } from "@storybook/react";
import React, { useState } from "react";
import { AccordionItemBody } from "../AccordionItemBody";
const LongTestText = `Quis laborum tempor sit ex consequat nisi voluptate minim. Labore elit culpa magna exercitation proident do ut veniam pariatur amet enim. Tempor cupidatat ut velit fugiat velit laboris. Incididunt voluptate reprehenderit sunt excepteur nisi eu. Occaecat sint tempor ipsum in fugiat magna id.Consectetur cillum aliquip ad sint consectetur proident cillum amet incididunt cillum laborum culpa. Velit ea dolore exercitation magna reprehenderit ex in. Aliqua ullamco labore voluptate occaecat id cillum sint ipsum ut dolore aliquip. Dolor pariatur ut nostrud aute nostrud irure.Sunt proident sint voluptate est tempor enim irure. Cillum commodo nisi ad reprehenderit cupidatat cupidatat ad reprehenderit. Minim do fugiat ad dolor reprehenderit excepteur exercitation duis laborum labore enim pariatur irure.Esse laboris nostrud mollit magna. Dolore magna pariatur laboris magna cillum voluptate labore commodo nulla commodo. Ad et cupidatat consectetur ad laboris culpa tempor deserunt culpa magna ex. Laborum dolor non irure enim sint ut labore aliquip. Magna ad aliquip laboris laboris dolore laborum Lorem ut.Anim culpa anim enim pariatur tempor est reprehenderit. Do proident mollit officia ex excepteur proident aliqua consectetur Lorem cupidatat. Commodo mollit eiusmod aliqua duis consectetur magna dolor voluptate est enim. Dolore consequat sunt cupidatat dolore ex anim dolore et sint veniam. Proident excepteur voluptate veniam labore veniam commodo laboris officia Lorem irure Lorem. Proident officia quis ad esse culpa sunt consectetur officia occaecat irure enim voluptate. Mollit enim ad do duis qui in labore consectetur cillum id consequat nulla sint.Culpa et irure sunt ex Lorem deserunt voluptate eiusmod minim. Exercitation Lorem non reprehenderit reprehenderit id non. Officia nulla ullamco ut esse. Magna minim et Lorem enim id velit dolore esse Lorem dolor eu. Nostrud ea reprehenderit do incididunt. Elit id ad dolore officia nisi ad sint proident non. Elit nisi laborum occaecat laboris labore in exercitation.Sunt ad eiusmod exercitation culpa culpa nisi quis non eiusmod velit ea laborum anim. Ea Lorem non officia id adipisicing ut cillum proident sit excepteur non. Id veniam labore reprehenderit ut officia id in ad dolore. Aute duis nisi sint enim Lorem ut laborum cillum occaecat sunt excepteur laboris laborum.Ad sit dolore nisi cillum deserunt est minim amet reprehenderit velit mollit aliquip mollit. Officia qui elit veniam ipsum amet Lorem magna. Pariatur ad consequat commodo ea. Nulla deserunt labore exercitation officia excepteur nostrud labore eu est amet. Et reprehenderit consectetur sint magna laboris laboris eu cillum laborum aliqua. Ea veniam elit ipsum consectetur aliqua enim officia ullamco veniam excepteur veniam officia.Nostrud aute dolor consequat aliquip mollit voluptate. Eiusmod consectetur adipisicing sunt magna est cillum pariatur tempor ex non ea. Culpa duis esse enim nostrud incididunt nisi. Deserunt irure nisi pariatur ut reprehenderit ipsum ut exercitation. Tempor sit enim pariatur Lorem magna sunt nisi culpa irure anim ut magna.Mollit culpa amet id in minim enim quis velit do enim incididunt Lorem aliquip. Minim aute mollit esse cupidatat culpa. Ea Lorem dolor nisi occaecat esse et Lorem labore non veniam eiusmod anim velit.`;

export default {
	title: "Components/ActivitiesBrowser/Accordion/AccordionItemBody",
	component: AccordionItemBody,
	args: {
		isOpen: false,
	},
	argTypes: {},
} as ComponentMeta<typeof AccordionItemBody>;

const Template: ComponentStory<typeof AccordionItemBody> = (args) => {
	return <AccordionItemBody {...args}>{LongTestText}</AccordionItemBody>;
};

export const Default = Template.bind({});
Default.args = {
	isOpen: false,
};
