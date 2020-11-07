export enum ReportType {
    DISEASE,
    TRAFFICKING,
    DESTRUCTION
}

export function getReportTypeName(type: ReportType): string {
    switch (type) {
        case ReportType.DISEASE:
            return 'Disease spreading';
        case ReportType.TRAFFICKING:
            return 'Suspected trafficking of wild animals';
        case ReportType.DESTRUCTION:
            return 'Destructing of wild animal\'s habitat';
        default:
            return null;
    }
}

export function getAllReportType(): ReportType[] {
    return [
        ReportType.DISEASE,
        ReportType.TRAFFICKING,
        ReportType.TRAFFICKING
    ];
}