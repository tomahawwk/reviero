export interface ITimeline {
    onClose(): void;
    items: ITimelineBlock[];
}

export type ITimelineBlock = {
    title: string;
    list: ITimelineItem[];
}

export type ITimelineItem = {
    title: string;
    id: number;
    index?: number;
    description?: string;
    during: string;
}