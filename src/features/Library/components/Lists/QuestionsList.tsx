import { useMediaQuery } from "usehooks-ts";
import { Icon, ScrollableBox } from "@/components";
import {
	AccordionContainer,
	AccordionItemHead,
	BrowsingBarButton,
} from "@/components/ActivitiesBrowser";
import {
	Box,
	Collapse,
	Popover,
	PopoverBody,
	PopoverContent,
	PopoverTrigger,
	useDisclosure,
} from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";

export const QuestionList = (props: {
	questions?: {
		id: string;
		isAnswered: boolean;
	}[];
}) => {
	const lg = useMediaQuery("(min-width: 1024px)");
	return lg ? <RegularList {...props} /> : <DropdownList {...props} />;
};

const RegularList = ({
	questions,
}: {
	questions?: { id: string; isAnswered: boolean }[];
}) => {
	const window = useMediaQuery("(min-width: 1536px)");
	return (
		<div className="ui-part flex flex-col p-6 justify-between items-center gap-5 overflow-hidden">
			{window ? (
				<>
					<p className="max-2xl:hidden font-medium text-xl">Questions</p>
					<Accordion>
						<ScrollableBox className="w-full h-full rounded">
							<div className="grid grid-cols-2 gap-3 px-2">
								{questions?.map((question, index) => (
									// <CourseItem key={index} title={`Q${index}`} to={`QCM/${question.id}`} isAnswered={question.isAnswered} />
									<QuestionButton
										key={index}
										to={`QCM/${question.id}`}
										isAnswered={question.isAnswered}
										index={index + 1}
									/>
								))}
							</div>
						</ScrollableBox>
					</Accordion>
				</>
			) : (
				<>
					<Popover variant="rounded" size="fit">
						<PopoverTrigger>
							<div className="flex flex-row items-center gap-1 py-1 px-2 rounded bg-darks text-clears cursor-pointer">
								QCM
								<Icon name="expand_more" />
							</div>
						</PopoverTrigger>
						<PopoverContent zIndex="50">
							<PopoverBody>
								<div className="p-2 flex flex-col gap-2">
									<AccordionItemHead
										isActive
										className="h-16"
										hideIcon
										title="QCM"
										questions={10}
										onClick={() => {}}
									/>
									<AccordionItemHead
										className="h-16 bg-clears-secondary"
										hideIcon
										title="QROC"
									/>
									<AccordionItemHead
										className="h-16 bg-clears-secondary"
										hideIcon
										title="Cas Clinique"
									/>
								</div>
							</PopoverBody>
						</PopoverContent>
					</Popover>
					<ScrollableBox className="w-full h-full rounded">
						<div className="grid grid-cols-2 gap-3 px-2">
							{questions?.map((question, index) => (
								// <CourseItem key={index} title={`Q${index}`} to={`QCM/${question.id}`} isAnswered={question.isAnswered} />
								<QuestionButton
									key={index}
									to={`QCM/${question.id}`}
									isAnswered={question.isAnswered}
									index={index + 1}
								/>
							))}
						</div>
					</ScrollableBox>
				</>
			)}
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
		<div className="w-full h-full flex flex-row gap-2">
			<Popover variant="rounded" size="fit">
				<PopoverTrigger>
					<Box className="w-full h-full">
						<BrowsingBarButton
							title="QCM"
							subtitle={`${questions?.length.toString()} questions`}
							arrow
							up
						/>
					</Box>
				</PopoverTrigger>
				<PopoverContent zIndex="50">
					<PopoverBody>
						<div className="p-2 flex flex-col gap-2">
							<AccordionItemHead
								isActive
								className="h-16"
								hideIcon
								title="QCM"
								questions={10}
								onClick={() => {}}
							/>
							<AccordionItemHead
								className="h-16 bg-clears-secondary"
								hideIcon
								title="QROC"
							/>
							<AccordionItemHead
								className="h-16 bg-clears-secondary"
								hideIcon
								title="Cas Clinique"
							/>
						</div>
					</PopoverBody>
				</PopoverContent>
			</Popover>
			<Popover variant="rounded" size="fit" placement="top-end">
				<PopoverTrigger>
					<Box className="w-full h-full">
						<BrowsingBarButton
							title="Questions"
							subtitle="click to change"
							arrow
							up
						/>
					</Box>
				</PopoverTrigger>
				<PopoverContent zIndex="50">
					<PopoverBody>
						<div className="grid grid-cols-2 gap-3 px-2 py-3">
							{questions?.map((question, index) => (
								// <CourseItem key={index} title={`Q${index}`} to={`QCM/${question.id}`} />
								<QuestionButton
									key={index}
									to={`QCM/${question.id}`}
									isAnswered={question.isAnswered}
									index={index + 1}
								/>
							))}
						</div>
					</PopoverBody>
				</PopoverContent>
			</Popover>
		</div>
	);
};

function Accordion(props: PropsWithChildren) {
	const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });
	return (
		<AccordionContainer>
			<React.Fragment>
				<AccordionItemHead
					title="QCM"
					questions={10}
					isActive={isOpen}
					onClick={onToggle}
				/>
				<Collapse in={isOpen}>{props.children}</Collapse>
				{/* <AccordionItemBody isOpen={active}>{props.children}</AccordionItemBody> */}
			</React.Fragment>
			<AccordionItemHead title="QROC" />
			<AccordionItemHead title="Cas Clinique" />
		</AccordionContainer>
	);
}

const QuestionButton = (props: {
	index: number;
	to: string;
	isAnswered: boolean;
}) => {
	const md = useMediaQuery("(min-width: 768px)");
	return (
		<NavLink
			to={props.to}
			className={({ isActive }) =>
				`w-full select-none h-11 flex flex-row items-center justify-center gap-2 px-3 rounded bg-clears-tertiary hover:brightness-75  ${
					isActive
						? "border-solid box-border border-darks-mid border-2 text-darks"
						: "text-darks-mid"
				}`
			}
		>
			<div
				className={`w-[.875rem] h-[.875rem] rounded-full ${
					props.isAnswered ? "bg-primary" : "bg-sinopia"
				}`}
			></div>
			<div className="text-[.8125rem]  font-medium leading-none">
				{md ? "Question " : "Q"}
				{props.index}
			</div>
		</NavLink>
	);
};