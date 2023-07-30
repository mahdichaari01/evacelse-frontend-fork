import { ComponentStory, ComponentMeta } from "@storybook/react";
import React, { useState } from "react";

import { AccordionItemHead } from "./AccordionItemHead";
import { AccordionItemBody } from "./AccordionItemBody";
import { AccordionContainer } from "./AccordionContainer";
function Test() {
	const [currentOpen, setCurrentOpen] = useState(0);
	return (
		<AccordionContainer>
			{[0, 1, 2, 3].map((id) => (
				<React.Fragment key={id}>
					<AccordionItemHead
						title={id === 0 ? "QCM" : id === 1 ? "QROC" : "Cas Clinique"}
						questions={10}
						isActive={currentOpen === id}
						onClick={() => {
							if (currentOpen === id) setCurrentOpen(-1);
							else setCurrentOpen(id);
						}}
					/>
					<AccordionItemBody isOpen={currentOpen === id}>
						<div className="">
							Fugiat nisi excepteur dolore aliquip voluptate magna consectetur tempor
							dolor ut in aliquip. Tempor dolor eu magna non cillum veniam.
							Exercitation enim duis exercitation eu aute nulla. Laborum eu labore
							incididunt non nulla irure tempor do voluptate velit. Est aliquip elit
							officia excepteur. Tempor ea duis exercitation ipsum. Adipisicing labore
							quis proident laborum cillum ullamco aute reprehenderit velit cillum in.
							Labore velit culpa non duis commodo fugiat irure nulla id laboris
							cupidatat minim laboris non. Culpa do dolor sunt irure. Pariatur quis
							pariatur consectetur enim. Sit consectetur esse consectetur ad elit
							adipisicing mollit nostrud.
						</div>
					</AccordionItemBody>
				</React.Fragment>
			))}
		</AccordionContainer>
	);
}

export default {
	title: "Components/ActivitiesBrowser/Accordion/Test",
	component: Test,
} as ComponentMeta<typeof Test>;

const Template: ComponentStory<typeof Test> = (args) => {
	return <Test />;
};

export const Test1 = Template.bind({});
Test1.args = {};
