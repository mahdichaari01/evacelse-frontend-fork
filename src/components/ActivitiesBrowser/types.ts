type ActivityType = "QCM" | "QROC" | "Cas Clinique";
export interface IActivity {
	id: string | number;
	name: string;
	type: ActivityType;
}
