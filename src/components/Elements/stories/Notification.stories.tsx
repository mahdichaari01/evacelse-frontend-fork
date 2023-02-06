import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { Notification } from "../Notification";

export default {
	title: "Elements/Notification",
	component: Notification,
	args: {
		className: "string",
		children: (
			<div className="alert shadow-lg">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						className="stroke-info flex-shrink-0 w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						></path>
					</svg>
					<div>
						<h3 className="font-bold">New message!</h3>
						<div className="text-xs">You have 1 unread message</div>
					</div>
				</div>
				<div className="flex-none">
					<button className="btn btn-sm">See</button>
				</div>
			</div>
		),
	},
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args) => (
	<Notification {...args} />
);
export const Story = Template.bind({});
