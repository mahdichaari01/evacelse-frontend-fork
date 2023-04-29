import { PropsWithChildren, createContext, useContext, useState } from "react";

interface TitleContextData {
	title: string;
	setTitle: (title: string) => void;
}

const titleContext = createContext<TitleContextData>({} as TitleContextData);

export const TitleContextProvider = (props: PropsWithChildren<{}>) => {
	const [title, setTitle] = useState("Home");

	return (
		<titleContext.Provider value={{ title, setTitle }}>
			{props.children}
		</titleContext.Provider>
	);
};

export const useTitle = () => {
	const context = useContext(titleContext);
	if (context === undefined) {
		throw new Error("useTitle must be used within a TitleContextProvider");
	}
	return context;
};
