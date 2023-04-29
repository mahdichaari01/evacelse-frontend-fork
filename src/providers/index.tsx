import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme as ChakraTheme } from "@/config/ChakraTheme";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AuthProvider } from "@/lib/authContext";
import { TitleContextProvider } from "@/contexts/TitleContext";
type AppProviderProps = {
	children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
	return (
		<TitleContextProvider>
			<QueryClientProvider client={queryClient}>
				<ChakraProvider theme={ChakraTheme} resetCSS={false}>
					<AuthProvider>{children}</AuthProvider>
					<ReactQueryDevtools initialIsOpen={false} />
				</ChakraProvider>
			</QueryClientProvider>
		</TitleContextProvider>
	);
};
