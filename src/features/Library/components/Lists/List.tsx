import { ComponentProps } from "react";
import { useMediaQuery } from "usehooks-ts";
import { CourseItem } from "../CourseItem";
import { DropdownMenu, ScrollableBox } from "@/components";
import { BrowsingBarButton } from "@/components/ActivitiesBrowser";
interface Evaluation {
	title: string;
	to: string;
}

export const List = (props: {
	evaluations?: Evaluation[];
	type: "Evaluations" | "Sessions";
}) => {
	const xl = useMediaQuery("(min-width:1280px)");
	return xl ? <RegularList {...props} /> : <DropdownList {...props} />;
};
const RegularList = ({
	evaluations,
	type,
}: {
	evaluations?: Evaluation[];
	type: "Evaluations" | "Sessions";
}) => {
	return (
		<div className="ui-part flex flex-col p-7 justify-between items-center gap-5">
			<p className="max-2xl:hidden font-medium text-xl">{type}</p>
			<ScrollableBox className="w-full h-full rounded">
				<div className="flex flex-col gap-3">
					{evaluations?.map((evaluation, index) => (
						<CourseItem key={index} {...evaluation} />
					))}{" "}
				</div>
			</ScrollableBox>
			<p className="font-medium text-xs">{evaluations?.length} cours</p>
		</div>
	);
};

const DropdownList = ({
	evaluations,
	type,
}: {
	evaluations?: Evaluation[];
	type: "Evaluations" | "Sessions";
}) => {
	return (
		<DropdownMenu
			header={
				<BrowsingBarButton title={type} subtitle="click to change" arrow up />
			}
			top
			id="list"
		>
			<div className="flex flex-col gap-3">
				{evaluations?.map((evaluation, index) => (
					<CourseItem key={index} {...evaluation} />
				))}
			</div>
		</DropdownMenu>
	);
};
