import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { ScrollableBox } from "../ScrollableBox";

export default {
	title: "Components/Elements/ScrollableBox",
	component: ScrollableBox,
	args: {
		name: "string",
		className: "",
	},
	decorators: [
		(Story) => (
			<div
				style={{
					width: "clamp(250px,50vw,800px)",
					height: "clamp(400px,50vh,600px)",
				}}
			>
				<Story />
			</div>
		),
	],
} as ComponentMeta<typeof ScrollableBox>;

const Template: ComponentStory<typeof ScrollableBox> = (args) => (
	<ScrollableBox {...args} />
);

export const Story = Template.bind({});
Story.args = {
	children: (
		<div>
			Elit aute voluptate do aliqua pariatur fugiat in. Incididunt anim non
			proident ut tempor deserunt occaecat labore irure ipsum ad ipsum sint. Est
			minim et reprehenderit enim dolore in aliquip consectetur. Ad cupidatat
			mollit eiusmod ullamco ex exercitation magna ullamco commodo sunt
			exercitation. Ut laborum duis do dolor amet fugiat veniam voluptate veniam id
			sunt cupidatat Lorem. Laborum non exercitation pariatur aute excepteur amet
			ut. Dolore incididunt id tempor aliquip dolor exercitation Lorem deserunt
			Lorem sint. Dolore esse est dolor fugiat. Consectetur culpa nostrud excepteur
			amet cillum commodo occaecat dolore sit do laboris laboris ea minim. Laboris
			anim excepteur elit laborum ea nulla mollit deserunt adipisicing. In minim
			veniam consectetur cillum laborum non culpa ea amet dolore dolore. Esse
			tempor laboris sunt id eiusmod nulla deserunt id fugiat elit aute ex.
			Adipisicing consectetur ullamco reprehenderit minim. Cillum in eu ea ut amet
			in. Amet voluptate ea voluptate ea consectetur ad ipsum nulla esse nisi quis.
			Minim tempor labore non laboris esse ullamco laboris adipisicing aute nisi
			veniam cillum cupidatat. Aliqua dolor laborum consectetur ex nostrud
			reprehenderit Lorem ad ad dolore cillum occaecat. Reprehenderit nulla
			proident commodo occaecat magna voluptate exercitation consectetur. Aute ex
			sit ipsum nisi. Nulla proident aute do aliqua est et minim nisi. Aute ex sint
			labore quis voluptate elit aliquip laboris excepteur. Voluptate excepteur
			quis commodo Lorem Lorem do commodo sit dolore ut amet in. Occaecat sint
			ullamco ad veniam sint amet irure anim excepteur adipisicing aliqua consequat
			ad. Magna nostrud aliquip fugiat non occaecat. Minim magna enim eu ex anim
			sint elit magna laboris proident quis. Non nostrud officia irure veniam. Anim
			voluptate nulla ad magna incididunt ex incididunt enim aliquip eiusmod non
			ipsum cillum. Sunt voluptate qui officia excepteur nisi. Nulla laboris qui
			duis esse culpa elit minim reprehenderit sunt enim cupidatat aute. Officia
			anim do fugiat aute ad. Deserunt aute culpa dolore laborum ea deserunt
			consectetur proident id cillum laboris pariatur. Commodo amet amet aliqua
			mollit ullamco eiusmod aliquip anim consectetur non esse non sit proident.
			Tempor minim et ullamco id labore nostrud tempor proident nostrud sunt elit.
			Fugiat tempor laboris deserunt duis. Ad elit fugiat aliquip pariatur sit.
			Dolor ea amet esse fugiat mollit adipisicing Lorem est commodo officia
			consectetur eu. Fugiat irure dolor cillum proident anim ipsum deserunt qui
			aliquip enim pariatur ullamco. Tempor duis nisi consectetur nulla
			adipisicing. Dolor labore ex magna esse eiusmod culpa labore non. Enim
			nostrud consectetur exercitation consequat cupidatat nulla incididunt duis
			cillum enim. Adipisicing consequat occaecat occaecat id nostrud quis et
			consectetur enim irure do duis excepteur. Ad qui cillum enim consequat cillum
			consectetur esse ea cupidatat ea nulla consectetur officia laboris.
			Incididunt in adipisicing ipsum Lorem aliquip eiusmod veniam anim ex
			adipisicing aliquip. Ipsum ullamco occaecat fugiat reprehenderit ea in veniam
			aliquip eiusmod esse magna culpa enim. Do pariatur mollit elit nulla
			adipisicing magna. Elit aute voluptate do aliqua pariatur fugiat in.
			Incididunt anim non proident ut tempor deserunt occaecat labore irure ipsum
			ad ipsum sint. Est minim et reprehenderit enim dolore in aliquip consectetur.
			Ad cupidatat mollit eiusmod ullamco ex exercitation magna ullamco commodo
			sunt exercitation. Ut laborum duis do dolor amet fugiat veniam voluptate
			veniam id sunt cupidatat Lorem. Laborum non exercitation pariatur aute
			excepteur amet ut. Dolore incididunt id tempor aliquip dolor exercitation
			Lorem deserunt Lorem sint. Dolore esse est dolor fugiat. Consectetur culpa
			nostrud excepteur amet cillum commodo occaecat dolore sit do laboris laboris
			ea minim. Laboris anim excepteur elit laborum ea nulla mollit deserunt
			adipisicing. In minim veniam consectetur cillum laborum non culpa ea amet
			dolore dolore. Esse tempor laboris sunt id eiusmod nulla deserunt id fugiat
			elit aute ex. Adipisicing consectetur ullamco reprehenderit minim. Cillum in
			eu ea ut amet in. Amet voluptate ea voluptate ea consectetur ad ipsum nulla
			esse nisi quis. Minim tempor labore non laboris esse ullamco laboris
			adipisicing aute nisi veniam cillum cupidatat. Aliqua dolor laborum
			consectetur ex nostrud reprehenderit Lorem ad ad dolore cillum occaecat.
			Reprehenderit nulla proident commodo occaecat magna voluptate exercitation
			consectetur. Aute ex sit ipsum nisi. Nulla proident aute do aliqua est et
			minim nisi. Aute ex sint labore quis voluptate elit aliquip laboris
			excepteur. Voluptate excepteur quis commodo Lorem Lorem do commodo sit dolore
			ut amet in. Occaecat sint ullamco ad veniam sint amet irure anim excepteur
			adipisicing aliqua consequat ad. Magna nostrud aliquip fugiat non occaecat.
			Minim magna enim eu ex anim sint elit magna laboris proident quis. Non
			nostrud officia irure veniam. Anim voluptate nulla ad magna incididunt ex
			incididunt enim aliquip eiusmod non ipsum cillum. Sunt voluptate qui officia
			excepteur nisi. Nulla laboris qui duis esse culpa elit minim reprehenderit
			sunt enim cupidatat aute. Officia anim do fugiat aute ad. Deserunt aute culpa
			dolore laborum ea deserunt consectetur proident id cillum laboris pariatur.
			Commodo amet amet aliqua mollit ullamco eiusmod aliquip anim consectetur non
			esse non sit proident. Tempor minim et ullamco id labore nostrud tempor
			proident nostrud sunt elit. Fugiat tempor laboris deserunt duis. Ad elit
			fugiat aliquip pariatur sit. Dolor ea amet esse fugiat mollit adipisicing
			Lorem est commodo officia consectetur eu. Fugiat irure dolor cillum proident
			anim ipsum deserunt qui aliquip enim pariatur ullamco. Tempor duis nisi
			consectetur nulla adipisicing. Dolor labore ex magna esse eiusmod culpa
			labore non. Enim nostrud consectetur exercitation consequat cupidatat nulla
			incididunt duis cillum enim. Adipisicing consequat occaecat occaecat id
			nostrud quis et consectetur enim irure do duis excepteur. Ad qui cillum enim
			consequat cillum consectetur esse ea cupidatat ea nulla consectetur officia
			laboris. Incididunt in adipisicing ipsum Lorem aliquip eiusmod veniam anim ex
			adipisicing aliquip. Ipsum ullamco occaecat fugiat reprehenderit ea in veniam
			aliquip eiusmod esse magna culpa enim. Do pariatur mollit elit nulla
			adipisicing magna.
		</div>
	),
};
