import { PropsWithChildren, createContext, useContext, useState } from "react";

import { IStoreItem } from "../types";

interface IStoreContext {
	items: IStoreItem[];
	addItem: (item: IStoreItem) => void;
	removeItem: (id: IStoreItem["id"]) => void;
	clearCart?: () => void;
}

export const StoreContext = createContext<IStoreContext>({
	items: [],
	addItem: () => {},
	removeItem: () => {},
});

export const StoreContextProvider = ({ children }: PropsWithChildren) => {
	const [items, setItems] = useState<IStoreItem[]>([]);

	const addItem = (item: IStoreItem) => {
		setItems((prev) => {
			return prev.concat([item]);
		});
	};

	const removeItem = (id: IStoreItem["id"]) => {
		setItems((prev) => {
			return prev.filter((item) => item.id !== id);
		});
	};

	const clearCart = () => {
		setItems([]);
	};

	return (
		<StoreContext.Provider value={{ items, addItem, removeItem, clearCart }}>
			{children}
		</StoreContext.Provider>
	);
};

export const useStoreContext = () => {
	const context = useContext(StoreContext);
	return context;
};
