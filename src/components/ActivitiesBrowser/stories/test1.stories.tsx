import { ComponentStory, ComponentMeta } from "@storybook/react";
import React, { useState } from "react";

import { AccordionItemHead } from "../AccordionItemHead";
import { AccordionItemBody } from "../AccordionItemBody";

function Test() {
	const [currentOpen, setCurrentOpen] = useState(0);
	return (
		<div>
			{[0, 1, 2, 3].map((id) => (
				<div key={id}>
					<AccordionItemHead
						title="QCM"
						questions={10}
						isActive={currentOpen === id}
						onClick={() => {
							if (currentOpen === id) setCurrentOpen(-1);
							else setCurrentOpen(id);
						}}
					/>
					<AccordionItemBody isOpen={currentOpen === id}>
						<div>
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
				</div>
			))}
		</div>
	);
}

export default {
	title: "Components/ActivitiesBrowser/Accordion/Test",
	component: Test,
};

const Template: ComponentStory<typeof Test> = (args) => {
	return <Test />;
};

export const Test1 = Template.bind({});
Test1.args = {};
