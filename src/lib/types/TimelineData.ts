export type TimelineData = {
	title: string;
	colorClass: string;
	events?: {
		percentOfYear: number;
		isActive: boolean;
		title: string;
		src?: string;
		description?: string;
	}[];
}[];
