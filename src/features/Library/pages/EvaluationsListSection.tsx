import { useQuery } from "@tanstack/react-query";
import {
	NavLink,
	Outlet,
	useLocation,
	useNavigate,
	useParams,
} from "react-router-dom";
import { EvaluationResponse, getEvaluations } from "../api/getEvaluations";

import { useEffect } from "react";
import { List, EvalListSkeleton, EvalsListContainer } from "../components";

export const EvaluationsListSection = () => {
	const { chapterID } = useParams();
	const { isLoading, data } = useQuery<EvaluationResponse[]>({
		queryFn: () => getEvaluations(chapterID),
		queryKey: ["evaluations", chapterID],
		refetchOnMount: false,
	});
	const navigate = useNavigate();
	const location = useLocation();
	useEffect(() => {
		if (
			!isLoading &&
			location.pathname.slice(-"evaluations".length) === "evaluations"
		)
			navigate(`${data?.[0].id}`);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoading, data]);
	return (
		<>
			<EvalsListContainer>
				{isLoading ? (
					<EvalListSkeleton />
				) : (
					<List
						evaluations={data?.map((evaluation) => {
							return { title: evaluation.title, to: evaluation.id };
						})}
						type="Evaluations"
					/>
				)}
			</EvalsListContainer>
			<Outlet />
		</>
	);
};
