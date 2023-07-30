const randNumber = ({ min, max }: { min: number; max: number }) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const randAlpha = () => String.fromCharCode(randNumber({ min: 97, max: 122 }));

import { IStoreItem } from "./types";

export const FakeData: IStoreItem[] = Array.from(
  { length: randNumber({ min: 10, max: 20 }) },
  (_, i) => i + 1,
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
