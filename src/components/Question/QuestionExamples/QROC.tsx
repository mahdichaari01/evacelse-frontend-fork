import React from "react";
import { ScrollableBox } from "@/components";
import { QuestionStatement } from "../QuestionStatement";
import Option from "../Option";
import QuestionLayout from "../QuestionLayout";
import { QROCAnswer } from "../QROCAnswer";
import { useToggle } from "usehooks-ts";
import { QCMAnswer } from "../QCMAnswer";
interface QCMData {
	number_of_questions: number;
	index: number;
	question: string;
	answers: string[];
	correct_answer: number[];
	next?: () => void;
	previous?: () => void;
	is_favorite: boolean;
	toggle_favorite?: () => void;
	is_answered: boolean;
}
export function QROC(props: QCMData) {
	const {
		number_of_questions,
		index,
		question,
		answers,
		correct_answer,
		next,
		previous,
		is_favorite,
		toggle_favorite,
		is_answered,
	} = props;
	const [show, toggleshow] = useToggle(false);

	const LayoutProps = {
		number_of_questions,
		index,
		is_favorite,
		next: "",
		previous: "",
		verify: () => {
			toggleshow();
		},
		attachment:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
	};

	return (
		<QuestionLayout {...LayoutProps}>
			<QuestionStatement content={props.question} />

			<QROCAnswer
				answer="Une femme de 33 ans présente une cellulite au dos de la main droite 24 heures après avoir été mordue par un chat. Une coloration de Gram du liquide sérosanguinolent qui s'échappe de la plaie contient des polynucléaires neutrophiles et de petits bâtonnets Gram négatif. Quel serait le traitement de choix à administrer dans ce cas-ci?"
				reveal={show}
				userinput={() => {
					return new Promise((resolve) => {
						setTimeout(() => {
							resolve(
								"Une femme de 33 ans présente une cellulite au dos de la main droite 24 heures après avoir été mordue par un chat. Une coloration de Gram du liquide sérosanguinolent qui s'échappe de la plaie contient des polynucléaires neutrophiles et de petits bâtonnets Gram négatif. Quel serait le traitement de choix à administrer dans ce cas-ci?"
							);
						}, 3000);
					});
				}}
			/>
		</QuestionLayout>
	);
}
