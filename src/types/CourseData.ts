export interface CourseData {
	id: number;
	title: string;
	progress: number;
	content: {
		qcm: number;
		qroc: number;
		casClinique: number;
		cours: number;
	};
}
