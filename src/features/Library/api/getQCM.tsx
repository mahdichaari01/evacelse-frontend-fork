import { randBoolean, randLine, randNumber } from "@ngneat/falso";

const FakeQuestions = Array.from({ length: 100 }, (_, i) => i + 1).map(
	(id) => ({
		id: id.toString(),
		questionStatement: randLine({ lineCount: randNumber({ min: 1, max: 4 }) }),
		answers: Array.from(
			{ length: randNumber({ min: 3, max: 7 }) },
			(_, i) => i + 1
		).map((id) => ({
			id,
			answerStatement: randLine({ lineCount: randNumber({ min: 1, max: 2 }) })
				.split("\n")
				.join(),
			isCorrect: randBoolean(),
		})),
		isAnswered: randBoolean(),
	})
);

export interface QuestionsResponse {
	id: string;
	isAnswered: boolean;
}

export interface QuestionResponse {
	id: string;
	questionStatement: string;
	answers: {
		answerStatement: string;
		isCorrect: boolean;
	}[];
	isAnswered: boolean;
}

export const getQuestions = (id?: string) => {
	if (!id) throw Error("Evaluation ID is required");
	return new Promise<QuestionsResponse[]>((resolve) => {
		setTimeout(() => {
			resolve(
				FakeQuestions.map((q) => {
					const { id, isAnswered } = q;
					return { id, isAnswered };
				})
			);
		}, 1000);
	});
};

export const getQuestion = (id?: string) => {
	if (!id) throw Error("Question ID is required");
	return new Promise<QuestionResponse>((resolve, reject) => {
		setTimeout(() => {
			const question = FakeQuestions.find((q) => q.id === id);
			if (question) resolve(question);
			else reject("Question not found");
		}, 1000);
	});
};

console.log(FakeQuestions);
