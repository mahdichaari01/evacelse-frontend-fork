import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { LibraryItemSkeleton } from "./LibraryItem";

export default {
	title: "Library/LibraryItemSkeleton",
	component: LibraryItemSkeleton,
	args: {},
} as ComponentMeta<typeof LibraryItemSkeleton>;

const Template: ComponentStory<typeof LibraryItemSkeleton> = (args) => (
	<LibraryItemSkeleton />
);

export const Story = Template.bind({});
Story.args = {};
