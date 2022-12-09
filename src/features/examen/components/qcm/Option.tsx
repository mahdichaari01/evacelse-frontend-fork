import { insert } from "../../../../Testing/testing";

export default function Option({
	index,
	content,
	color,
}: {
	index: number;
	content: string;
	color?: "red" | "green";
}) {
	return (
		<li className="flex flex-row justify-start gap-4 hover:brightness-95">
			<div
				className={`flex w-12 place-content-center place-items-center rounded-sm p-3 text-3xl font-bold	 ${
					color
						? color === "red"
							? "hover:filter- bg-error text-clears"
							: "bg-success text-clears"
						: "bg-base-300 text-darks-highest"
				}`}
			>
				<span>{String.fromCharCode(index + "A".charCodeAt(0))}</span>
			</div>
			<div
				className={`flex w-full items-center justify-start rounded-sm p-3 ${
					color
						? color === "red"
							? "bg-error text-clears"
							: "bg-success text-clears"
						: "bg-base-300 text-darks-highest"
				}`}
			>
				<span>{content}</span>
			</div>
		</li>
	);
}
insert("Exams", "QCMOption", [
	{
		variant: "red",
		element: (
			<Option
				index={3}
				content="Une coloration de Gram du liquide sérosanguinolent qui s'échappe de la plaie contient des polynucléaires neutrophiles"
				color="red"
			/>
		),
	},
	{
		variant: "green",
		element: (
			<Option
				index={3}
				content="Une coloration de Gram du liquide sérosanguinolent qui s'échappe de la plaie contient des polynucléaires neutrophilesUne coloration de Gram du liquide sérosanguinolent qui s'échappe de la plaie contient des polynucléaires neutrophilesUne coloration de Gram du liquide sérosanguinolent qui s'échappe de la plaie contient des polynucléaires neutrophilesUne coloration de Gram du liquide sérosanguinolent qui s'échappe de la plaie contient des polynucléaires neutrophiles"
				color="green"
			/>
		),
	},
	{
		variant: "normal",
		element: (
			<Option
				index={25}
				content="Une coloration de Gram du liquide sérosanguinolent qui s'échappe de la plaie contient des polynucléaires neutrophiles"
			/>
		),
	},
]);
