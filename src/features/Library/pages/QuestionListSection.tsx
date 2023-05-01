import { useQuery } from "@tanstack/react-query";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
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
		if (!isLoading && !location.pathname.includes("QCM")) {
			//find the first unanswered question
			if (!data) return;
			const firstUnansweredQuestion = data?.find(
				(question) => !question.isAnswered
			);
			console.log(firstUnansweredQuestion);
			if (firstUnansweredQuestion) navigate(`QCM/${firstUnansweredQuestion.id}`);
			//the following code makes the user navigate to the next evaluation if all questions in this evaluation are answered which is a bad user experience due to inability to review the answers
			// implementing it the right way is a bit complicated and it will result in a lot of loading time due to the number of requests and api limitations
			// maybe in the future, we can move the backend to graphQL and implement it the right way

			// else {
			// 	//if all questions in this evaulation are answered, navigate to the next evaluation
			// 	if (!evaluationsAreLoading) {
			// 		if(!evaluations) return;
			// 		const current = evaluations.findIndex(
			// 			(evaluation) => evaluation.id === evaluationID
			// 		);
			// 		if (current + 1 >= evaluations.length) {
			// 			navigate(`QCM/${data[data.length-1].id}`);
			// 		}
			// 		else navigate(`../${evaluations[current + 1].id}`);
			// 	}
			// 	else
			navigate(`QCM/${data?.[data.length - 1].id}`);
			// }
		}
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
