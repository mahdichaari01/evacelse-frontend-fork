import React from "react";

export default function Option({
	index,
	content,
	color,
	outline,
	onClick,
}: {
	index: number;
	content: string;
	color?: "red" | "green" | "black";
	outline?: boolean;
	onClick?: () => void;
}) {
	return (
		<li
			onClick={onClick}
			className="flex flex-row justify-start gap-4 drop-shadow-sm hover:drop-shadow-md cursor-pointer active:scale-[101%] transition-all duration-75 "
		>
			<div
				className={`flex w-12 place-content-center place-items-center rounded p-3 text-3xl font-bold	 ${
					color
						? color === "red"
							? "bg-error text-clears"
							: color === "black"
							? "bg-darks text-clears"
							: "bg-success text-clears"
						: "bg-clears text-darks-highest"
				} ${outline ? "outline outline-2 outline-darks" : ""}`}
			>
				<span>{String.fromCharCode(index + "A".charCodeAt(0))}</span>
			</div>
			<div
				className={`flex w-full items-center justify-start rounded p-3 ${
					color
						? color === "red"
							? "bg-error text-clears"
							: color === "black"
							? "bg-clears text-darks"
							: "bg-success text-clears"
						: "bg-clears text-darks-highest"
				} ${outline ? "outline outline-2 outline-darks" : ""}`}
			>
				<span>{content}</span>
			</div>
		</li>
	);
}
