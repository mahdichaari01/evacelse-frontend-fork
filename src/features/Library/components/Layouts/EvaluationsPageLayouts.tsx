import { PropsWithChildren } from "react";

export const EvaluationPageLayout = (props: PropsWithChildren) => {
	return (
		<div className="w-full h-full grid grid-cols-3 grid-rows-[1fr,4.875rem] gap-2 xl:grid-cols-[20.375rem,1fr] xl:grid-rows-2 xl:gap-5 2xl:grid-cols-[20.25rem,1fr,20.25rem] 2xl:grid-rows-1">
			{props.children}
		</div>
	);
};

export const QuestionContainer = (props: PropsWithChildren) => (
	<div className="col-start-1 col-end-4 row-start-1 xl:col-start-2 xl:row-end-3 xl:col-end-3">
		{props.children}
	</div>
);

export const EvalsListContainer = (props: PropsWithChildren) => (
	<div className="col-start-1 row-start-2 row-end-3 xl:row-start-1 xl:row-end-2 2xl:row-end-3">
		{props.children}
	</div>
);

export const QuestionListContainer = (props: PropsWithChildren) => (
	<div className="col-start-2 col-end-4 row-start-2 row-end-3 xl:row-start-2 xl:row-end-3 xl:col-start-1 xl:col-end-2 2xl:row-start-1 2xl:row-end-3 2xl:col-start-3 2xl:col-end-4">
		{props.children}
	</div>
);
