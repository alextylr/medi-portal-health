import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  statCards: StatCardInfo[] = [
    {
      title: 'Online Consultations',
      subTitle: 'Today',
      statValue: 12,
      isIncrease: false,
      isDecrease: false,
    },
    {
      title: 'Offline Consultations',
      subTitle: 'Today',
      statValue: 2,
      isIncrease: false,
      isDecrease: false,
    },
    {
      title: 'Satisfied Patients',
      subTitle: '',
      statValue: 250,
      isIncrease: true,
      isDecrease: false,
    },
    {
      title: 'Patients per month',
      subTitle: 'This month',
      statValue: 430,
      isIncrease: true,
      isDecrease: false,
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  viewPatient(id: number) {
    this.router.navigateByUrl(`/patient/${id}`);
  }
}
export interface StatCardInfo {
  title: string;
  subTitle: string;
  statValue: number;
  isIncrease: boolean;
  isDecrease: boolean;
}
