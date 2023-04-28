import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme as ChakraTheme } from "@/config/ChakraTheme";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
type AppProviderProps = {
	children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
	return (
		<QueryClientProvider client={queryClient}>
			<ChakraProvider theme={ChakraTheme} resetCSS={false}>
				{children}
				<ReactQueryDevtools initialIsOpen={false} />
			</ChakraProvider>
		</QueryClientProvider>
	);
};
