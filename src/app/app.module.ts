import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { ChunkPipe } from './chunk.pipe';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { InterventionPlanComponent } from './components/intervention-plan/intervention-plan.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { MiniCalendarComponent } from './components/mini-calendar/mini-calendar.component';
import { ModalComponent } from './components/modal/modal.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { AppointmentsComponent } from './routes/appointments/appointments.component';
import { NavigationComponent } from './routes/navigation/navigation.component';
import { OverviewComponent } from './routes/overview/overview.component';
import { PatientDetailComponent } from './routes/patient-detail/patient-detail.component';
import { SettingsComponent } from './routes/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    PatientListComponent,
    PatientDetailComponent,
    InterventionPlanComponent,
    NavigationComponent,
    OverviewComponent,
    SettingsComponent,
    LineChartComponent,
    MiniCalendarComponent,
    ChunkPipe,
    AppointmentsComponent,
    AddPatientComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule, NgxPaginationModule, BrowserAnimationsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
