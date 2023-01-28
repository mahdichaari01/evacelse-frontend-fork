type ActivityType = "QCM" | "QROC" | "Cas Clinique";
export interface Activity {
	id: string | number;
	name: string;
	type: ActivityType;
}
