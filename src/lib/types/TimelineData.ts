export type TimelineData = TimelineYearData[];

export type TimelineEventData = {
	date: Date;
	isActive: boolean;
	title: string;
	src?: string;
	description?: string;
};

export type TimelineYearData = { title: string; colorClass: string; events?: TimelineEventData[] };
