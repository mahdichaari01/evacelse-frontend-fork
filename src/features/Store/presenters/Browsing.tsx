import { useQuery } from "@tanstack/react-query";
import { getStoreItems } from "../api/getStoreItems";
import { StoreItem } from "../components";
import { BrowsingLayout } from "../components/layouts/BrowsingLayout";
import { useStoreContext } from "../context";
import { useNavigate } from "react-router-dom";

export const Browsing = () => {
	const context = useStoreContext();
	const query = useQuery({
		queryKey: ["store-items", "all"],
		queryFn: getStoreItems,
	});
	const navigate = useNavigate();

	return (
		<BrowsingLayout loading={query.isLoading}>
			{query.isSuccess &&
				query.data.map((item) => (
					<StoreItem
						key={item.id}
						data={item}
						moreDetails={() => navigate(`${item.id}`)}
						addToCart={() => context.addItem(item)}
						removeFromCart={() => context.removeItem(item.id)}
						added={context.items.some((i) => i.id === item.id)}
					/>
				))}
		</BrowsingLayout>
	);
};
