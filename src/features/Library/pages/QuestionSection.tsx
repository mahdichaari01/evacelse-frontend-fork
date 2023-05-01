import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { QuestionContainer } from "../components/Layouts/EvaluationsPageLayouts";
import {
	QuestionResponse,
	QuestionsResponse,
	getQuestion,
	getQuestions,
} from "../api/getQCM";
import { QuestionSkeleton } from "../components/skeletons/QuestionSkeleton";
import QuestionLayout from "@/components/Question/QuestionLayout";
import { EvaluationResponse, getEvaluations } from "../api/getEvaluations";
import { useToggle } from "usehooks-ts";
import { QCMAnswer, QuestionStatement } from "@/components/Question";

export const QuestionsSection = () => {
	const { questionID, chapterID, evaluationID } = useParams();

	const { isLoading, data } = useQuery<QuestionResponse>({
		queryFn: () => {
			console.log("something triggered this");
			return getQuestion(questionID);
		},
		queryKey: ["question", questionID],
	});
	const { data: evaluations } = useQuery<EvaluationResponse[]>({
		queryFn: () => getEvaluations(chapterID),
		queryKey: ["evaluations", chapterID],
		refetchOnMount: false,
	});
	const { data: questions } = useQuery<QuestionsResponse[]>({
		queryFn: () => getQuestions(evaluationID),
		queryKey: ["questions", evaluationID],
	});
	const [verify, toggleVerify] = useToggle(false);
	useEffect(() => {
		if (verify ? !data?.isAnswered : data?.isAnswered) toggleVerify();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [questionID, data?.isAnswered]);
	let index = 0,
		next: string | undefined,
		previous: string | undefined,
		isFavorite = false,
		length = 0;
	if (!isLoading && evaluations && questions) {
		index = questions.findIndex((q) => q.id === data?.id);
		if (!index) index = 0;
		length = questions.length;
		const currentEvaluation = evaluations.findIndex((e) => e.id === evaluationID);
		if (index === 0) {
			if (currentEvaluation !== 0)
				previous = `/library/${chapterID}/evaluations/${
					evaluations[currentEvaluation - 1].id
				}/QCM/${questions[questions.length - 1].id}`;
		} else {
			previous = `/library/${chapterID}/evaluations/${evaluationID}/QCM/${
				questions[index - 1].id
			}`;
		}
		if (index === questions.length - 1) {
			if (currentEvaluation !== evaluations.length - 1)
				next = `/library/${chapterID}/evaluations/${
					evaluations[currentEvaluation + 1].id
				}/QCM/${questions[0].id}`;
		} else {
			next = `/library/${chapterID}/evaluations/${evaluationID}/QCM/${
				questions[index + 1].id
			}`;
		}
	}

	return (
		<>
			<QuestionContainer>
				{isLoading ? (
					<QuestionSkeleton />
				) : (
					<div className="md:ui-part">
						<QuestionLayout
							index={index + 1}
							is_favorite={isFavorite}
							number_of_questions={length}
							next={next}
							previous={previous}
							verify={toggleVerify}
						>
							<QuestionStatement content={data?.questionStatement || ""} />
							<QCMAnswer
								reveal={verify}
								answers={data?.answers.map((a) => a.answerStatement) || []}
								correct_answers={
									data?.answers
										.map((a, i) => {
											return { i: i, isC: a.isCorrect };
										})
										.filter((v, i) => v.isC)
										.map((v) => v.i) || []
								}
								questionID={data?.id || ""}
							/>
						</QuestionLayout>
					</div>
				)}
			</QuestionContainer>
		</>
	);
};
