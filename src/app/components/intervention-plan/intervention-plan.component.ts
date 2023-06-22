import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { PatientDetail } from 'src/app/interfaces/patient-detail';
import { MockPatientDetailService } from 'src/app/services/mock-patient-detail.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-intervention-plan',
  templateUrl: './intervention-plan.component.html',
  styleUrls: ['./intervention-plan.component.scss'],
})
export class InterventionPlanComponent implements OnInit, OnChanges {
  displayModal: boolean = false;
  patient: PatientDetail;
  selectedView: string = 'upcoming';
  today: Date;
  
  @Input() patientId: any;

  constructor(
    private patientDetailService: MockPatientDetailService,
    private modalService: ModalService,
  ) {}

  ngOnInit(): void {
    this.today = new Date(); 

    this.patient = this.patientDetailService.getPatientById(this.patientId);

    this.modalService.watch().subscribe((res) => {
      this.displayModal = res;
    });
  }

  ngOnChanges(): void {
    this.patient = this.patientDetailService.getPatientById(this.patientId);
  }

  openModal() {
    this.modalService.open();
  }
}
