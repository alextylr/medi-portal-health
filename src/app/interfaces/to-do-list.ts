
export interface PatientList {
    patients: PatientListItem[];
}

export interface PatientListItem {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    conditions: string;
    doctorAssigned: string;
    nextAppointment?: string | null;
    id: number;
}

export interface NavItem {
    title: string
    route: string;
    activeIconPath: string;
    inactiveIconPath: string;
}