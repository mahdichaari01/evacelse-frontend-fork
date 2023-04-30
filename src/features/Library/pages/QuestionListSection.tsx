import { useQuery } from "@tanstack/react-query";
import {
	NavLink,
	Outlet,
	useLocation,
	useNavigate,
	useParams,
} from "react-router-dom";
import { QuestionListContainer } from "../components/Layouts/EvaluationsPageLayouts";
import { QuestionsResponse, getQuestions } from "../api/getQCM";
import { QuestionListSkeleton } from "../components/skeletons/QuestionListSkeleton";
import { useEffect } from "react";
import { QuestionList } from "../components/Lists/QuestionsList";
export const QuestionsListSection = () => {
	const { evaluationID } = useParams();
	const { isLoading, data } = useQuery<QuestionsResponse[]>({
		queryFn: () => getQuestions(evaluationID),
		queryKey: ["questions", evaluationID],
	});
	const navigate = useNavigate();
	const location = useLocation();
	useEffect(() => {
		if (!isLoading && !location.pathname.includes("QCM"))
			navigate(`QCM/${data?.[0].id}`);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoading, data]);
	return (
		<>
			<QuestionListContainer>
				{isLoading ? <QuestionListSkeleton /> : <QuestionList questions={data} />}
			</QuestionListContainer>
			<Outlet />
		</>
	);
};
