import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientDetail } from 'src/app/interfaces/patient-detail';
import { MockPatientDetailService } from 'src/app/services/mock-patient-detail.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {

  patientForm: FormGroup = this.fb.group({
    firstName: ['', {validators: [Validators.required], asyncValidators: [], updateOn: 'blur'}],
    lastName: ['' ,   {validators: [Validators.required], asyncValidators: [], updateOn: 'blur'}],
    gender: ['' ,   {validators: [Validators.required], asyncValidators: [], updateOn: 'blur'}],
    dateOfBirth: ['' ,   {validators: [Validators.required], asyncValidators: [], updateOn: 'blur'}],
    address: ['' ,   {validators: [Validators.required], asyncValidators: [], updateOn: 'blur'}],
    phoneNumber: ['' ,   {validators: [Validators.required], asyncValidators: [], updateOn: 'blur'}],
    maritalStatus: ['' ,   {validators: [Validators.required], asyncValidators: [], updateOn: 'blur'}],
    insuranceProvider: ['' ,   {validators: [Validators.required], asyncValidators: [], updateOn: 'blur'}],
    doctorAssigned: ['' ,   {validators: [Validators.required], asyncValidators: [], updateOn: 'blur'}],
    conditions: ['' ,   {validators: [Validators.required], asyncValidators: [], updateOn: 'blur'}],
    emergencyContactName: ['' ,   {validators: [Validators.required], asyncValidators: [], updateOn: 'blur'}],
    emergencyContactRelation: ['' ,   {validators: [Validators.required], asyncValidators: [], updateOn: 'blur'}],
    emergencyContactPhoneNumber: ['' ,   {validators: [Validators.required], asyncValidators: [], updateOn: 'blur'}],
    id: [5,   {validators: [Validators.required], asyncValidators: [], updateOn: 'blur'}],
   
  });
  showSuccessModal: boolean;

  
  constructor(private fb: FormBuilder, private patientDetailService: MockPatientDetailService, private modalService: ModalService ) { }

  ngOnInit(): void {
  }

  onSave() {
    if(this.patientForm.invalid) {
      return false;
    } else {
      this.createPatient(this.patientForm.value);
      this.modalService.close();
      return true;
    }
  }

  onClose() {
    this.modalService.close();
  }

  createPatient(patient: PatientDetail) {
    this.patientDetailService.createNewPatient(patient);
  }

  autoFillData() {
    this.patientForm = this.fb.group({
      firstName: ['Shania', {validators: [Validators.required], asyncValidators: [], updateOn: 'blur'}],
      lastName: ['Twain' ,   {validators: [Validators.required], asyncValidators: [], updateOn: 'blur'}],
      gender: ['Female' ,   {validators: [Validators.required], asyncValidators: [], updateOn: 'blur'}],
      dateOfBirth: ['08/28/1965' ,   {validators: [Validators.required], asyncValidators: [], updateOn: 'blur'}],
      address: ['222 Rodeo Dr' ,   {validators: [Validators.required], asyncValidators: [], updateOn: 'blur'}],
      phoneNumber: ['555-555-5555' ,   {validators: [Validators.required], asyncValidators: [], updateOn: 'blur'}],
      maritalStatus: ['Single' ,   {validators: [Validators.required], asyncValidators: [], updateOn: 'blur'}],
      insuranceProvider: ['EPA' ,   {validators: [Validators.required], asyncValidators: [], updateOn: 'blur'}],
      doctorAssigned: ['Dr. Sean Maguire' ,   {validators: [Validators.required], asyncValidators: [], updateOn: 'blur'}],
      conditions: ['Asthma' ,   {validators: [Validators.required], asyncValidators: [], updateOn: 'blur'}],
      emergencyContactName: ['Jane Doe' ,   {validators: [Validators.required], asyncValidators: [], updateOn: 'blur'}],
      emergencyContactRelation: ['Sibling' ,   {validators: [Validators.required], asyncValidators: [], updateOn: 'blur'}],
      emergencyContactPhoneNumber: ['888-888-8888' ,   {validators: [Validators.required], asyncValidators: [], updateOn: 'blur'}],
      id: [5,   {validators: [Validators.required], asyncValidators: [], updateOn: 'blur'}],
    });
    this.patientForm.markAsDirty();
  }

}
