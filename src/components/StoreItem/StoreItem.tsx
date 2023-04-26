import React from "react";
import { Icon } from "@/components";
import { PackData as Data } from "@/types";
export function StoreItem(props: {
	data: Data;
	addToCart: () => void;
	moreDetails: () => void;
}) {
	const { data, addToCart, moreDetails } = props;
	return (
		<div className="grid h-fit w-72 sm:w-[21rem] auto-rows-min grid-cols-2 items-center gap-6 rounded-sm bg-base-100 py-5 px-[1.25rem]">
			<div className="col-start-1 col-end-3 row-start-1 row-end-2 flex w-full flex-row items-center justify-between">
				<div className="tooltip" data-tip={data.title}>
					<div
						onClick={moreDetails}
						className="h-fit text-left cursor-pointer overflow-ellipsis text-2xl font-bold leading-none text-darks line-clamp-1"
					>
						{data.title}
					</div>
				</div>
				<div className="h-fit justify-self-end text-2xl font-bold text-primary">
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

			<div className="col-start-1 col-end-3 row-start-2 row-end-3 h-fit ">
				<div className="flex w-full flex-row items-center justify-between rounded-sm bg-base-300 py-5 px-2 text-[.625rem] sm:text-xs text-darks-low">
					<span className="flex items-center">
						<Icon
							name="description"
							className="text-[.625rem] sm:text-base font-extralight"
						></Icon>
						<span className="mr-[.0625rem] font-bold">{data.content.cours}</span>
						certif
					</span>
					<span>
						<span className="mr-1">
							<span className="mr-[.0625rem] font-bold">{data.content.qcm}</span>QCM
						</span>
						<span className="mr-1">
							<span className="mr-[.0625rem] font-bold">{data.content.qroc}</span>
							QROC
						</span>
						<span>
							<span className="mr-[.0625rem] font-bold">
								{data.content.casClinique}
							</span>
							Cas Clinique
						</span>
					</span>
				</div>
			</div>
			<StoreItemButton
				className="btn-outline col-start-1 col-end-2 row-start-3 row-end-4 border-2"
				onClick={moreDetails}
			>
				<Icon name="visibility" className="text-base text-[.625rem]" />
				<span>Plus de details</span>
			</StoreItemButton>
			<StoreItemButton
				className="col-start-2 col-end-3 row-start-3 row-end-4"
				onClick={addToCart}
			>
				<Icon name="shopping_cart" className="text-[.625rem] sm:text-base"></Icon>
				<span>Ajouter au panier</span>
			</StoreItemButton>
		</div>
	);
}
export function StoreItemButton(props: {
	children: React.ReactNode;
	onClick: () => void;
	className?: string;
}) {
	const { children, onClick, className } = props;
	return (
		<button
			className={`btn-primary btn ${
				className ? className : ""
			} flex flex-row justify-between rounded-sm px-3 sm:px-[.9375rem] py-[.625rem] text-[.5625rem] sm:text-[.625rem] font-medium normal-case`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
