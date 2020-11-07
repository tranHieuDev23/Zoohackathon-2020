import { MapPickerValue } from 'src/app/components/map-picker/map-picker.component';
import { IssueStatus } from './issue-status';

export class TimelineEvent {
    constructor(
        public readonly title: string,
        public readonly description: string,
        public readonly newStatus: IssueStatus,
        public readonly image: string,
        public readonly date: Date
    ) { }
}

export class Issue {
    constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly published: Date,
        public readonly description: string,
        public readonly location: MapPickerValue,
        public readonly status: IssueStatus,
        public readonly coverImage: string,
        public readonly timeline: TimelineEvent[]
    ) { }
}