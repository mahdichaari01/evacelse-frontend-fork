import { randAlpha, randNumber } from "@ngneat/falso";
import { IStoreItem } from "../types";

export const FakeData: IStoreItem[] = Array.from(
	{ length: randNumber({ min: 10, max: 20 }) },
	(_, i) => i + 1
).map((id) => ({
	id: id.toString(),
	name: `${randAlpha().toUpperCase()}CEM ${randNumber({ min: 1, max: 6 })}`,
	price: randNumber({ min: 0, max: 1000 }),
}));

export const getStoreItems = () => {
	return new Promise<IStoreItem[]>((resolve, reject) => {
		setTimeout(() => {
			resolve(FakeData);
		}, 1000);
	});
};
