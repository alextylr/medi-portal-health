import { Component, OnInit } from '@angular/core';
import { MockPatientDetailService } from 'src/app/services/mock-patient-detail.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss'],
})
export class PatientListComponent implements OnInit {
  displayModal: boolean;
  constructor(private patientDetailService: MockPatientDetailService, private modalService: ModalService) {}

  patientList: any;
  patientId: string;

  ngOnInit(): void {
    this.patientDetailService.getPatientList().subscribe(res => {
     this.patientList = res;
    });

    this.modalService.watch().subscribe((res) => {
      this.displayModal = res;
    });
  }

  openModal() {
    this.modalService.open();
  }
}
