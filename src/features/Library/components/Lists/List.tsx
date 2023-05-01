import { useMediaQuery } from "usehooks-ts";
import { CourseItem } from "../CourseItem";
import { ScrollableBox } from "@/components";
import { BrowsingBarButton } from "@/components/ActivitiesBrowser";
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverBody,
	Box,
} from "@chakra-ui/react";
interface Evaluation {
	title: string;
	to: string;
}

export const List = (props: {
	evaluations?: Evaluation[];
	type: "Evaluations" | "Sessions";
}) => {
	const lg = useMediaQuery("(min-width: 1024px)");
	return lg ? <RegularList {...props} /> : <DropdownList {...props} />;
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
		<Popover variant="rounded" size="third" placement="top-start">
			<PopoverTrigger>
				<Box className="w-full h-full">
					<BrowsingBarButton title={type} subtitle="click to change" arrow up />
				</Box>
			</PopoverTrigger>
			<PopoverContent>
				<PopoverBody>
					<div className="flex flex-col gap-3 bg-clears p-5">
						{evaluations?.map((evaluation, index) => (
							<CourseItem key={index} {...evaluation} />
						))}
					</div>
				</PopoverBody>
			</PopoverContent>
		</Popover>
	);
};
