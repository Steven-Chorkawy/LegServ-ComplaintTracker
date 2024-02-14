export default interface IComplaintListItem {
    Title: string;
    Year: string;
    DateReceived: Date;
    DateAcknowledged: Date;
    AcknowledgedBy: any; // people picker.
    _Status: string;
    ComplaintSummary: string;
    HandlingComplaint: any; // people picker.
    InformalResolution: string;
    InformalResolutionDate: Date;
    EscalatedToManager: boolean;
    DateEscalatedToManager: Date;
    ManagerResolution: string;
    ManagerResolutionDate: Date;
    EscalatedToDepartmentHead: boolean;
    DateEscalatedToDepartmentHead: Date;
    DepartmentHeadResolution: string;
    DepartmentHeadResolutionDate: Date;
    EscalatedToDepartmentCAO: boolean;
    DateEscalatedToCAO: Date;
    ServiceStandardsMet: string; // Yes/No options.
    ComplaintNumber: string;
}