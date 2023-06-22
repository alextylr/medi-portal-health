 export interface PatientDetail {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    dateOfBirth: string;
    address: string;
    phoneNumber: string;
    maritalStatus: string;
    insuranceProvider: string;
    emergencyContactName: string;
    emergencyContactRelation: string;
    emergencyContactPhoneNumber: string;
    conditions: string;
    registeredOn?: string;
    doctorAssigned: string;
    nextAppointment: string;
    upcomingAppointmentsList?: Appointment[];
    pastAppointmentsList?: Appointment[];
}

export interface EmergencyContact {
    name: string;
    phoneNumber: string;
    relation: string;
}

export interface Appointment {
   appointmentDate: string;
   symptoms: string;
   category: string;
   physician: string;
}