import React from "react";
import { IStoreItem } from "../../types";
import { RemoveIcon } from "../StoreItem";
interface CartItemProps {
	data: IStoreItem;
	removeFromCart: () => void;
	moreDetails: () => void;
}
export function CartItem(props: CartItemProps) {
	const { data, removeFromCart, moreDetails } = props;
	return (
		<li className="relative  w-full rounded-full bg-clears px-4 py-1 cursor-pointer active:scale-[98%] transition-all drop-shadow my-1">
			<div className="flex w-full flex-row items-center justify-between gap-3">
				<div
					className="flex w-full flex-row items-center justify-between"
					onClick={moreDetails}
				>
					<div className="h-fit overflow-ellipsis text-xl font-bold leading-none text-darks line-clamp-1">
						{data.name}
					</div>
					<div className="h-fit justify-self-end text-xl font-bold text-primary">
						{data.price === 0 ? (
							"Gratuit"
						) : (
							<>
								{data.price}
								<sup>DT</sup>
							</>
						)}
					</div>
				</div>

				<div
					onClick={removeFromCart}
					className="relative scale-[120%] active:scale-[100%] transition-all left-3 flex h-[2.375rem] w-[38px] shrink-0 cursor-pointer select-none items-center justify-center rounded-full bg-sinopia hover:brightness-90"
				>
					<RemoveIcon className="text-white" />
					{/* <Icon name="delete" className="text-white" /> */}
				</div>
			</div>
		</li>
	);
}
