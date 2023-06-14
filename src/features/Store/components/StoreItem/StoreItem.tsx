import React from "react";
import { IStoreItem } from "../../types";
export function StoreItem(props: {
	data: IStoreItem;
	addToCart?: () => void;
	removeFromCart?: () => void;
	added?: boolean;
	moreDetails: () => void;
}) {
	const { data, addToCart, moreDetails } = props;
	return (
		<div className="h-fit w-full max-w-lg shadow-md flex flex-col items-center gap-10 rounded-xl bg-base-100 py-5 pt-7 px-[1.25rem] overflow-hidden">
			<div className="w-full flex flex-col items-center gap-5">
				<div className="h-fit text-2xl font-bold text-primary text-center">
					{data.price === 0 ? (
						"Gratuit"
					) : (
						<>
							{data.price}
							<sup>DT</sup>
						</>
					)}
				</div>
				<div className="text-center text-4xl font-bold">{data.name}</div>
			</div>
			{/* <div className="w-full h-fit flex flex-row justify-between gap-[1.25rem] overflow-hidden">
				<StoreItemButton className="btn-outline border-2" onClick={moreDetails}>
					<EyeIcon className="w-5 h-5" />
					<div>Plus de details</div>
				</StoreItemButton>
				<StoreItemButton onClick={addToCart}>
					<CartIcon className="w-5 h-5" />
					<div>Ajouter au panier</div>
				</StoreItemButton>
			</div> */}
			<div className="btn-group rounded w-full ">
				<AlteredStoreItemButton
					className="btn-outline outline-2"
					onClick={moreDetails}
				>
					<EyeIcon className="w-5 h-5" />
					<div>Plus de details</div>
				</AlteredStoreItemButton>
				{props.added ? (
					<AlteredStoreItemButton
						onClick={props.removeFromCart}
						className="btn-outline btn-neutral  outline-2"
					>
						<RemoveIcon className="w-5 h-5" />
						<div>retirer au panier</div>
					</AlteredStoreItemButton>
				) : (
					<AlteredStoreItemButton onClick={addToCart}>
						<CartIcon className="w-5 h-5" />
						<div>ajouter au panier</div>
					</AlteredStoreItemButton>
				)}
			</div>
		</div>
	);
}
export function StoreItemButton(props: {
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
}) {
	const { children, onClick, className } = props;
	return (
		<button
			className={`btn-primary btn ${
				className ? className : ""
			} flex flex-row justify-center items-center min-h-0 text-left leading-none align-middle w-auto flex-grow gap-1 flex-shrink rounded-sm px-3 sm:px-[.9375rem] py-[.625rem] h-fit text-[.5rem] sm:text-[.625rem] font-medium normal-case flex-nowrap `}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export function AlteredStoreItemButton(props: {
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
}) {
	const { children, onClick, className } = props;
	return (
		<button
			className={`btn-primary btn ${
				className ? className : ""
			} flex flex-row justify-center items-center min-h-0 text-left leading-none align-middle w-full flex-grow gap-1 flex-shrink rounded-sm px-3 sm:px-[.9375rem] py-[.625rem] h-fit text-[.5rem] sm:text-[.625rem] font-medium normal-case flex-nowrap `}
			// className="btn w-1/2 normal-case text-sm font-medium py-2 leading-none min-h-fit h-[2.3125rem] text-primary"
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export const CartIcon = ({ className }: { className?: string }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={2}
		stroke="currentColor"
		className={`w-6 h-6 ${className}`}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
		/>
	</svg>
);

const EyeIcon = ({ className }: { className?: string }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={2}
		stroke="currentColor"
		className={`w-6 h-6 ${className}`}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
		/>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
		/>
	</svg>
);

export const RemoveIcon = ({ className }: { className?: string }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={2}
		stroke="currentColor"
		className={`w-6 h-6 ${className}`}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
		/>
	</svg>
);
