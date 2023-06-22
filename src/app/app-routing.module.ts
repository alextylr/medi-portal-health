import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { AssertJWTAuthGuard } from './assert-jwtauth.guard';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { NavigationComponent } from './routes/navigation/navigation.component';
import { OverviewComponent } from './routes/overview/overview.component';
import { SettingsComponent } from './routes/settings/settings.component';

import { AppointmentsComponent } from './routes/appointments/appointments.component';
import { PatientDetailComponent } from './routes/patient-detail/patient-detail.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    canActivate: [],
    children: [
      {
        path: 'overview',
        component: OverviewComponent,
      },
      {
        path: 'patient-list',
        component: PatientListComponent,
      },
      {
        path: 'patient/:id',
        component: PatientDetailComponent,
      },
      {
        path: 'appointments',
        component: AppointmentsComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
    ]
   
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
