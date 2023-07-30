import { IStoreItem } from "../types";
import { FakeData } from "../fakeData";

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
