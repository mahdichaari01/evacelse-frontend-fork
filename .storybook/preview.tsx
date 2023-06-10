import type { Preview } from "@storybook/react";
import "../src/index.css";
import { AppProvider } from "../src/providers";
import { BrowserRouter } from "react-router-dom";
import React from "react";

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
	decorators: [
		(Story) => (
			<BrowserRouter>
				<AppProvider>
					<Story />
				</AppProvider>
			</BrowserRouter>
		),
	],
};

export default preview;
