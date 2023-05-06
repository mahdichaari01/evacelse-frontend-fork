import { PropsWithChildren } from "react";

export const EvaluationPageLayout = (props: PropsWithChildren) => {
	return (
		<div className="w-full h-full overflow-hidden max-md:px-3 max-md:pb-2 grid grid-cols-3 grid-rows-[1fr,3.3rem] gap-2 lg:grid-cols-[20.375rem,1fr] lg:grid-rows-2 lg:gap-5 xl:grid-cols-[20.25rem,1fr,20.25rem] xl:grid-rows-1">
			{props.children}
		</div>
	);
};

export const QuestionContainer = (props: PropsWithChildren) => (
	<div className="h-full w-full col-start-1 col-end-4 row-start-1 lg:col-start-2 lg:row-end-3 lg:col-end-3 overflow-hidden">
		{props.children}
	</div>
);

export const EvalsListContainer = (props: PropsWithChildren) => (
	<div className="col-start-1 row-start-2 row-end-3 lg:row-start-1 lg:row-end-2 xl:row-end-3">
		{props.children}
	</div>
);

export const QuestionListContainer = (props: PropsWithChildren) => (
	<div className="col-start-2 col-end-4 row-start-2 row-end-3 lg:row-start-2 lg:row-end-3 lg:col-start-1 lg:col-end-2 xl:row-start-1 xl:row-end-3 xl:col-start-3 xl:col-end-4	">
		{props.children}
	</div>
);
