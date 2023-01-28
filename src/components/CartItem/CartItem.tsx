import React from "react";
import { Icon } from "@/components";
import { PackData as Data } from "@/types";
interface CartItemProps {
	data: Data;
	removeFromCart: () => void;
	moreDetails: () => void;
}
export function CartItem(props: CartItemProps) {
	const { data, removeFromCart, moreDetails } = props;
	return (
		<div className="relative mt-[1.1875rem] w-full rounded-sm bg-clears p-4">
			<div
				onClick={removeFromCart}
				className="absolute top-0 left-1/2 flex h-[2.375rem] w-[38px] -translate-x-1/2 -translate-y-1/2 cursor-pointer select-none items-center justify-center rounded-full bg-sinopia hover:brightness-90"
			>
				<Icon name="delete" className="text-white" />
			</div>
			<div className="flex w-full flex-row items-center justify-between">
				<div className="tooltip" data-tip={data.title}>
					<div
						onClick={moreDetails}
						className="h-fit cursor-pointer overflow-ellipsis text-xl font-bold leading-none text-darks line-clamp-1"
					>
						{data.title}
					</div>
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

			<div className="flex w-full flex-row items-center justify-between rounded-sm bg-base-100 mt-3 text-[.625rem] text-darks-low">
				<span className="">
					<span className="mr-[1px] font-bold">{data.content.cours} </span>
					cours
				</span>

				<span className="">
					<span className="mr-[1px] font-bold">{data.content.qcm} </span>QCM
				</span>
				<span className="">
					<span className="mr-[1px] font-bold">{data.content.qroc} </span>
					QROC
				</span>
				<span>
					<span className="mr-[1px] font-bold">{data.content.casClinique} </span>
					Cas Clinique
				</span>
			</div>
		</div>
	);
}
