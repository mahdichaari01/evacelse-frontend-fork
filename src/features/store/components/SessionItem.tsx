import { insert } from "../../../Testing/testing";

interface SessionData {
	title: string;
	price: number;
	content: {
		cours: number;
		qcm: number;
		qroc: number;
		casClinique: number;
	};
}
export default function SessionItem(props: {
	data: SessionData;
	addToCart: () => void;
	moreDetails: () => void;
}) {
	const { data, addToCart, moreDetails } = props;
	return (
		<div className="grid h-fit w-[21rem] auto-rows-min grid-cols-2 items-center gap-6 rounded-sm bg-base-100 py-5 px-[1.25rem]">
			<div className="col-start-1 col-end-2 row-start-1 row-end-2 h-fit text-4xl font-bold leading-none text-darks">
				{data.title}
			</div>
			<div className="col-start-2 col-end-3 row-start-1 row-end-2 h-fit justify-self-end text-lg font-bold text-primary">
				{data.price === 0 ? (
					"Gratuit"
				) : (
					<>
						{data.price}
						<sup>DT</sup>
					</>
				)}
			</div>
			<div className="col-start-1 col-end-3 row-start-2 row-end-3 h-fit ">
				<div className="w-ful bg-base-300l flex flex-row items-center justify-between rounded-sm bg-base-300 py-5 px-2 text-xs text-darks-low">
					<span className="flex items-center">
						<span className="material-symbols-rounded font-extralight">
							description
						</span>
						<span className="mr-[.0625rem] font-bold">{data.content.cours}</span>
						certif
					</span>
					<span>
						<span className="mr-1">
							<span className="mr-[.0625rem] font-bold">{data.content.qcm}</span>QCM
						</span>
						<span className="mr-1">
							<span className="mr-[.0625rem] font-bold">{data.content.qroc}</span>QROC
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
			<SessionItemButton
				className="btn-outline col-start-1 col-end-2 row-start-3 row-end-4 border-2"
				onClick={() => {}}
			>
				<span className="material-symbols-rounded text-base">visibility</span>
				<span>Plus de details</span>
			</SessionItemButton>
			<SessionItemButton
				className="col-start-2 col-end-3 row-start-3 row-end-4"
				onClick={() => {}}
			>
				<span className="material-symbols-rounded text-base">shopping_cart</span>
				<span>Ajouter au panier</span>
			</SessionItemButton>
		</div>
	);
}
function SessionItemButton(props: {
	children: React.ReactNode;
	onClick: () => void;
	className?: string;
}) {
	const { children, onClick, className } = props;
	return (
		<button
			className={`btn-primary btn ${
				className ? className : ""
			} flex flex-row justify-between rounded-sm px-[.9375rem] py-[.625rem] text-[.625rem] font-medium normal-case`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

insert("StoreComponents", "SessionItem", [
	{
		variant: "default",
		element: (
			<div className="bg-base-200 p-10">
				<SessionItem
					data={{
						title: "DCEM1",
						price: 50,
						content: {
							qcm: 10,
							cours: 20,
							qroc: 10,
							casClinique: 10,
						},
					}}
					addToCart={() => {}}
					moreDetails={() => {}}
				/>
			</div>
		),
	},
]);
