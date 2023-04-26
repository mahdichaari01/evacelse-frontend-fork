import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme as ChakraTheme } from "@/config/ChakraTheme";
type AppProviderProps = {
	children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
	return (
		<ChakraProvider theme={ChakraTheme} resetCSS={false}>
			{children}
		</ChakraProvider>
	);
};
