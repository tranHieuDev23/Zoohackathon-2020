import { MapPickerValue } from 'src/app/components/map-picker/map-picker.component';
import { ReportType } from './report-type';

export class Report {
    constructor(
        public readonly type: ReportType,
        public readonly location: MapPickerValue,
        public readonly description: string,
        public readonly images: File[]
    ) { }
}