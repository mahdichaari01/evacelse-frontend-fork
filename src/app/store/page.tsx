import { getStoreItems } from "@/app/store/fakeData";
import { BrowsingLayout } from "@/app/store/components/BrowsingLayout";
import { StoreItem } from "@/app/store/components/StoreItem";

export default async function Store() {
  const data = await getStoreItems();
  return (
    <BrowsingLayout>
      {data.map((item) => (
        <StoreItem key={item.id} data={item} />
      ))}
    </BrowsingLayout>
  );
}
