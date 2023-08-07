import {
	PropsWithChildren,
	ReactNode,
	createContext,
	useContext,
	useState,
} from "react";

interface TitleContextData {
	title: string;
	button: ReactNode;
	setTitleBar: (value: { title: string; button: ReactNode }) => void;
}

const titleContext = createContext<TitleContextData>({} as TitleContextData);

export const TitleContextProvider = (props: PropsWithChildren<{}>) => {
	const [titleBar, setTitleBar] = useState<{ title: string; button: ReactNode }>(
		{
			title: "",
			button: null,
		}
	);

	return (
		<titleContext.Provider value={{ setTitleBar, ...titleBar }}>
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
