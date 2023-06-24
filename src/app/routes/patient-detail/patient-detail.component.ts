import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientDetail } from 'src/app/interfaces/patient-detail';
import { MockPatientDetailService } from 'src/app/services/mock-patient-detail.service';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss'],
})
export class PatientDetailComponent implements OnInit {
  patient: PatientDetail;
  patientId: any;
  selectedView: string = 'prescription';

  constructor(
    private route: ActivatedRoute,
    private patientDetailService: MockPatientDetailService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.patientId = +params.get('id')!;
      this.patient = this.patientDetailService.getPatientById(this.patientId);
    });
  }

  goBack() {
    this.router.navigateByUrl('/layout');
  }

  scrollTop() {
    const el = document.getElementById('patient-detail');
    el?.scrollIntoView();
  }
}
