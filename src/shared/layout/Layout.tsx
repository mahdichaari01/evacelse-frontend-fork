import React, { ReactNode } from "react";
import QCM from "../../features/examen/components/qcm/QCM";
import { insertLayoutTest } from "../../Testing/layout/LayoutTest";
import Navigation from "../components/nav/Navigation";
import { useMediaQuery } from "../hooks/useMediaQuery";

export default function Layout(props: { children: ReactNode }) {
	return (
		<div
			style={{ minHeight: `${window.screen.height * 0.7}px` }}
			className="grid h-screen w-full grid-cols-1 grid-rows-[1fr,4.3rem] p-5 sm:grid-cols-[80px,1fr] sm:grid-rows-[80px,1fr] sm:gap-5 sm:overflow-hidden md:grid-cols-[90px,1fr] md:grid-rows-[90px,1fr]"
		>
			{props.children}
		</div>
	);
}

// testing
export function Test() {
	const match = useMediaQuery("lg");
	return (
		<Layout>
			<div className="col-start-1 row-start-1 h-full w-full rounded bg-base-200">
				<QCM
					number_of_questions={3}
					index={3}
					question={
						"Une femme de 33 ans présente une cellulite au dos de la main droite 24 heures après avoir été mordue par un chat. Une coloration de Gram du liquide sérosanguinolent qui s'échappe de la plaie contient des polynucléaires neutrophiles et de petits bâtonnets Gram négatif. Quel serait le traitement de choix à administrer dans ce cas-ci?"
					}
					answers={[
						"Une femme de 33 ans présente une cellulite au dos de la main droite 24 heures après avoir été mordue par un chat. Une coloration de Gram du liquide sérosanguinolent qui s'échappe de la plaie contient des polynucléaires neutrophiles et de petits bâtonnets Gram négatif. Quel serait le traitement de choix à administrer dans ce cas-ci?",
						"b",
						"c",
						"d",
					]}
					correct_answer={5}
					next={() => {}}
					previous={() => {}}
					is_favorite={false}
					toggle_favorite={() => {}}
					is_answered={true}
				/>
			</div>
			<div className="col-start-1 row-start-2 w-full rounded bg-base-200 p-1 sm:col-start-2 sm:row-start-1 lg:col-start-1">
				<Navigation
					items={[
						{ to: "", text: "Home", icon: "home" },
						{ to: "", text: "Home", icon: "psychology" },
						{ to: "", text: "Shop", icon: "local_mall" },
						{ to: "", text: "Favorite", icon: "star" },
					]}
					direction={match ? "vertical" : "horisontal"}
				/>
			</div>
			<div className="hidden"></div>
		</Layout>
	);
}
insertLayoutTest("test1", <Test />);
