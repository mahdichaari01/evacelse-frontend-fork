export enum QuestionType {
	QCM = "qcm",
	QROC = "qroc",
	CAS_CLINIQUE = "casClinique",
}

export interface Question {
	id: number;
	type: QuestionType;
	question: string;
	attachmentURL: string;
	isFavorite: boolean;
	isAnswered: boolean;
}

export interface QCMQuestion extends Question {
	type: QuestionType.QCM;
	options: string[];
	correctAnswers: number[];
}

export interface QROCQuestion extends Question {
	type: QuestionType.QROC;
	correctAnswer: string;
}

export interface CasCliniqueQuestion extends Question {
	type: QuestionType.CAS_CLINIQUE;
	Questions: Question[];
}
