export enum IssueStatus {
    DISCOVERED,
    REPORTED,
    INVESTIGATING,
    RESOLVED
}

export function getIssueStatusString(status: IssueStatus): string {
    switch (status) {
        case IssueStatus.DISCOVERED:
            return 'Discovered';
        case IssueStatus.REPORTED:
            return 'Reported to authority';
        case IssueStatus.INVESTIGATING:
            return 'Under investigation';
        case IssueStatus.RESOLVED:
            return 'Resolved';
    }
}

export function getIssueStatusColor(status: IssueStatus): string {
    switch (status) {
        case IssueStatus.DISCOVERED:
            return 'red';
        case IssueStatus.REPORTED:
            return 'orange';
        case IssueStatus.INVESTIGATING:
            return 'blue';
        case IssueStatus.RESOLVED:
            return 'green';
    }
}