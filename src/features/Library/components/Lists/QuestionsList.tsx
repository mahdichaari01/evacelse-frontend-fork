import { useMediaQuery } from "usehooks-ts";
import { CourseItem } from "../CourseItem";
import { DropdownMenu, ScrollableBox } from "@/components";
import { BrowsingBarButton } from "@/components/ActivitiesBrowser";

export const QuestionList = (props: {
	questions?: {
		id: string;
		isAnswered: boolean;
	}[];
}) => {
	const xl = useMediaQuery("(min-width:1280px)");
	return xl ? <RegularList {...props} /> : <DropdownList {...props} />;
};

const RegularList = ({
	questions,
}: {
	questions?: { id: string; isAnswered: boolean }[];
}) => {
	return (
		<div className="ui-part flex flex-col p-7 justify-between items-center gap-5">
			<p className="max-2xl:hidden font-medium text-xl">Questions</p>
			<ScrollableBox className="w-full h-full rounded">
				<div className="flex flex-col gap-3">
					{questions?.map((question, index) => (
						<CourseItem key={index} title={`Q${index}`} to={`QCM/${question.id}`} />
					))}{" "}
				</div>
			</ScrollableBox>
			<p className="font-medium text-xs">{questions?.length} questions</p>
		</div>
	);
};

const DropdownList = ({
	questions,
}: {
	questions?: { id: string; isAnswered: boolean }[];
}) => {
	return (
		<DropdownMenu
			header={
				<BrowsingBarButton title="Questions" subtitle="click to change" arrow up />
			}
			top
		>
			<div className="flex flex-col gap-3">
				{questions?.map((question, index) => (
					<CourseItem key={index} title={`Q${index}`} to={`QCM/${question.id}`} />
				))}
			</div>
		</DropdownMenu>
	);
};
