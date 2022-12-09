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

export default function CourseItem(props: any) {
	const { course } = props;
	return (
		<div>
			<h3>{course.title}</h3>
			<p>{course.description}</p>
		</div>
	);
}
