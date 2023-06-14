import { CartLayout } from "../components/layouts/CartLayout";
import { useStoreContext } from "../context";
import { EmptyCart } from "../components/EmptyCart";
import { CartItem } from "../components";
import { ScrollableBox } from "@/components";
import { useNavigate } from "react-router-dom";
export const Cart = () => {
	const context = useStoreContext();
	const navigate = useNavigate();
	const proceedToCheckout = () => {
		console.log("todo");
	};

	return (
		<CartLayout
			checkout={context.items.length > 0 ? proceedToCheckout : undefined}
			emptyCart={context.items.length > 0 ? context.clearCart : undefined}
		>
			{context.items.length === 0 ? (
				<EmptyCart />
			) : (
				<ScrollableBox className="w-full h-full">
					<ul className="w-full flex flex-col gap-3">
						{context.items.map((item) => (
							<CartItem
								removeFromCart={() => context.removeItem(item.id)}
								data={item}
								moreDetails={() => {
									navigate(`${item.id}`);
								}}
							/>
						))}
					</ul>
				</ScrollableBox>
			)}
		</CartLayout>
	);
};
