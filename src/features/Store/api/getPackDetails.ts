import { randAlpha, randNumber } from "@ngneat/falso";
import { IStoreItem } from "../types";
import { FakeData } from "./getStoreItems";

export const getPackDetails = (id: string) => {
	return new Promise<IStoreItem>((resolve, reject) => {
		setTimeout(() => {
			const item = FakeData.find((item) => item.id === id);
			if (!item) {
				reject("Item not found");
			} else resolve(item);
		}, 1000);
	});
};
