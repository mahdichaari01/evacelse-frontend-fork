import React from "react";

interface CourseData {
	title: string;
	progress: number;
	content: {
		qcm: number;
		qroc: number;
		casClinique: number;
	};
}

export default function CourseItem(props: { course: CourseData }) {
	const { course } = props;
	return (
		<div className="">
			<div></div>
		</div>
	);
}
