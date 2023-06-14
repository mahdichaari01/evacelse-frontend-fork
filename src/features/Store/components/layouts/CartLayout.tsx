import { Button } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export const CartLayout = (
	props: PropsWithChildren<{ checkout?: () => void; emptyCart?: () => void }>
) => (
	<div className="ui-part flex flex-col justify-between items-center py-8 px-4 gap-3 rounded-xl">
		<div className="w-full flex flex-col items-center">
			<h2 className="text-3xl font-extrabold text-center">Votre Panier</h2>

			<button
				className={`btn btn-secondary rounded-full btn-xs mt-2 ${
					props.emptyCart === undefined ? "btn-disabled" : ""
				}`}
				onClick={props.emptyCart}
			>
				clear cart
			</button>
		</div>
		{props.children}
		<Button
			onClick={props.checkout}
			colorScheme={"teal"}
			py={"1.5rem"}
			gap={"0.4rem"}
			isDisabled={props.checkout === undefined}
		>
			<CreditCardIcon />
			<span>Confirmer la commande</span>
		</Button>
	</div>
);

const CreditCardIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className="w-6 h-6"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
		/>
	</svg>
);
