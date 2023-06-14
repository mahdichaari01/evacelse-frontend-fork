import EmptyImg from "@/assets/EmptyCart.png";
export function EmptyCart() {
	return (
		<div className="flex mx-auto w-full max-w-[15.5625rem] flex-col items-center justify-center gap-7 p-2">
			<div className="w-[8.375rem]">
				<img className="object-contain" alt="Empty Cart" src={EmptyImg} />
			</div>
			<p className="text-center text-sm font-normal not-italic text-darks-mid">
				Votre panier est vide commencer par ajouter un pack
			</p>
		</div>
	);
}
