import { Injectable } from '@angular/core';
import { PatientDetail } from '../interfaces/patient-detail';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockPatientDetailService {
  patientDetail: PatientDetail[] = [{
    "id": 1,
    "firstName": "Julia",
    "lastName": "Jacklin",
    "dateOfBirth": "10/01/1966",
    "conditions": "Back Injury",
    "doctorAssigned": "Dr. Sean Maguire",
    "nextAppointment": "08/03/2023",
    "gender": "Female",
    "address": "716 Jenifer Lane",
    "phoneNumber": "361-705-2428",
    "maritalStatus": "Married",
    "insuranceProvider": "CareFirst",
    "registeredOn": "01/18/2015",
    "emergencyContactName": "Angel Olsen",
    "emergencyContactRelation": "Sibling",
    "emergencyContactPhoneNumber": "514-812-0831",
    "upcomingAppointmentsList": [
      {
        "appointmentDate": "08/03/2023",
        "symptoms": "Back Pain",
        "category": "Follow-Up",
        "physician": "Dr. Sean Maguire"
      },
      {
        "appointmentDate": "08/30/2023",
        "symptoms": "Back Pain",
        "category": "Follow-Up",
        "physician": "Dr. Sean Maguire"
      },
      {
        "appointmentDate": "09/30/2023",
        "symptoms": "N/A",
        "category": "Annual Check-up",
        "physician": "Dr. Sean Maguire"
      }
    ],
    "pastAppointmentsList": [
      {
        "appointmentDate": "09/30/2022",
        "symptoms": "N/A",
        "category": "Annual Check-up",
        "physician": "Dr. Sean Maguire"
      }
    ]
  }, {
    "id": 2,
    "firstName": "Phoebe",
    "lastName": "Bridgers",
    "gender": "Female",
    "dateOfBirth": "11/07/1972",
    "address": "333 Boyd Parkway",
    "phoneNumber": "676-976-3979",
    "maritalStatus": "Married",
    "insuranceProvider": "Blue Cross Blue Shield",
    "registeredOn": "04/10/2022",
    "conditions": "Arthritis",
    "doctorAssigned": "Dr. Sean Maguire",
    "nextAppointment": null,
    "emergencyContactName": "Gracie Abrams",
    "emergencyContactRelation": "Roommate",
    "emergencyContactPhoneNumber": "655-932-1010",
    "upcomingAppointmentsList": [
      {
        "appointmentDate": "05/23/2023",
        "symptoms": "Arthritis",
        "category": "Follow-Up",
        "physician": "Dr. Sean Maguire"
      },
      {
        "appointmentDate": "06/15/2023",
        "symptoms": "Arthritis",
        "category": "Follow-Up",
        "physician": "Dr. Sean Maguire"
      },
      {
        "appointmentDate": "12/06/2023",
        "symptoms": "N/A",
        "category": "Annual Check-up",
        "physician": "Dr. Sean Maguire"
      }
    ],
    "pastAppointmentsList": [
      {
        "appointmentDate": "12/06/2022",
        "symptoms": "N/A",
        "category": "Annual Check-up",
        "physician": "Dr. Sean Maguire"
      }
    ]
  }, {
    "id": 3,
    "firstName": "Lucy",
    "lastName": "Dacus",
    "gender": "Female",
    "dateOfBirth": "02/14/1976",
    "address": "2125 7th Trail",
    "phoneNumber": "901-483-9799",
    "maritalStatus": "Married",
    "insuranceProvider": "Blue Cross Blue Shield",
    "conditions": "Asthma",
    "doctorAssigned": "Dr. Sean Maguire",
    "nextAppointment": "05/03/2023",
    "registeredOn": "12/06/2016",
    "emergencyContactName": "Phoebe Bridgers",
    "emergencyContactRelation": "Sibling",
    "emergencyContactPhoneNumber": "399-658-1478",
    "upcomingAppointmentsList": [
      {
        "appointmentDate": "05/03/2023",
        "symptoms": "Back Pain",
        "category": "Follow-Up",
        "physician": "Dr. Sean Maguire"
      },
      {
        "appointmentDate": "05/30/2023",
        "symptoms": "Back Pain",
        "category": "Follow-Up",
        "physician": "Dr. Sean Maguire"
      },
      {
        "appointmentDate": "06/15/2023",
        "symptoms": "N/A",
        "category": "Annual Check-up",
        "physician": "Dr. Sean Maguire"
      }
    ],
    "pastAppointmentsList": [
      {
        "appointmentDate": "06/15/2022",
        "symptoms": "N/A",
        "category": "Annual Check-up",
        "physician": "Dr. Sean Maguire"
      },
      {
        "appointmentDate": "06/15/2021",
        "symptoms": "N/A",
        "category": "Annual Check-up",
        "physician": "Dr. Sean Maguire"
      },
      {
        "appointmentDate": "06/15/2020",
        "symptoms": "N/A",
        "category": "Annual Check-up",
        "physician": "Dr. Sean Maguire"
      }
    ]
  }, {
    "id": 4,
    "firstName": "Elizabeth",
    "lastName": "McAlpine",
    "gender": "Non-binary",
    "dateOfBirth": "04/10/1984",
    "address": "4939 Stuart Hill",
    "phoneNumber": "159-437-1172",
    "maritalStatus": "Single",
    "insuranceProvider": "Cigna",
    "conditions": "Sinus Infection",
    "doctorAssigned": "Dr. Phil McGraw",
    "nextAppointment": "08/03/2023",
    "registeredOn": "02/22/2014",
    "emergencyContactName": "Phoebe Bridgers",
    "emergencyContactRelation": "Parent",
    "emergencyContactPhoneNumber": "399-658-1478",
    "upcomingAppointmentsList": [
      {
        "appointmentDate": "08/03/2023",
        "symptoms": "Sinus Infection",
        "category": "Consult",
        "physician": "Dr. Phil McGraw"
      },
      {
        "appointmentDate": "08/15/2023",
        "symptoms": "Sinus Infection",
        "category": "Follow-Up",
        "physician": "Dr. Phil McGraw"
      },
      {
        "appointmentDate": "10/01/2023",
        "symptoms": "N/A",
        "category": "Annual Check-up",
        "physician": "Dr. Sean Maguire"
      }
    ],
    "pastAppointmentsList": [
      {
        "appointmentDate": "10/01/2022",
        "symptoms": "N/A",
        "category": "Annual Check-up",
        "physician": "Dr. Sean Maguire"
      },
      {
        "appointmentDate": "10/01/2021",
        "symptoms": "N/A",
        "category": "Annual Check-up",
        "physician": "Dr. Sean Maguire"
      }
    ]
  }];
  patient: PatientDetail;
  constructor() { }

  getPatientById(id: number): PatientDetail {
    if (id) {
     this.patient = this.patientDetail.find(patient => patient.id === id )!
    }
    return this.patient;
  }

  getPatientList(): Observable<PatientDetail[]> {
    return of(this.patientDetail);
  }

  createNewPatient(newPatient: PatientDetail) {
     this.patientDetail.push(newPatient);
  }



}
