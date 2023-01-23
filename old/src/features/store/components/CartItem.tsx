import React from "react";
import Icon from "../../../shared/components/Icon";
import { FormContainer } from "../../../shared/components/Inputs/Form";
import {
	NumberInput,
	TextInput,
} from "../../../shared/components/Inputs/Inputs";
import { insertTest } from "../../../Testing/testing";
import { SessionData } from "./SessionItem";
interface CartItemProps {
	data: SessionData;
	removeFromCart: () => void;
	moreDetails: () => void;
}

export function CartItem(props: CartItemProps) {
	const { data, removeFromCart, moreDetails } = props;
	return (
		<div className="relative mt-[1.1875rem] w-full rounded-sm bg-clears p-6">
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
			<div>
				<div className="flex w-full flex-row items-center justify-between rounded-sm bg-base-100 py-4 pb-2 text-xs text-darks-low">
					<span className="">
						<span className="mr-[.0625rem] font-bold">{data.content.cours} </span>
						cours
					</span>

					<span className="mr-1">
						<span className="mr-[.0625rem] font-bold">{data.content.qcm} </span>QCM
					</span>
					<span className="mr-1">
						<span className="mr-[.0625rem] font-bold">{data.content.qroc} </span>
						QROC
					</span>
					<span>
						<span className="mr-[.0625rem] font-bold">
							{data.content.casClinique}{" "}
						</span>
						Cas Clinique
					</span>
				</div>
			</div>
		</div>
	);
}

function Test() {
	const [value, setValue] = React.useState("DCEM1");
	return (
		<div className="flex flex-row">
			<FormContainer className="w-80 flex-shrink-0">
				<TextInput
					value={value}
					onChange={(e) => {
						setValue(e.target.value);
					}}
				>
					<div>Title</div>
				</TextInput>
			</FormContainer>
			<div className="w-96 flex-grow-0 bg-clears-secondary p-7">
				<CartItem
					data={{
						title: value,
						price: 100,
						content: {
							cours: 10,
							qcm: 0,
							qroc: 4,
							casClinique: 5,
						},
					}}
					removeFromCart={() => {
						console.log("remove");
					}}
					moreDetails={() => {
						console.log("more details");
					}}
				/>
			</div>
		</div>
	);
}
insertTest("StoreComponents", "cartItem", [
	{
		variant: "default",
		element: <Test />,
	},
]);
