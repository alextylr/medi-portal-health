import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { format, startOfToday } from 'date-fns';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
  animations: [
    trigger('opacityScale', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(.95)' }),
        animate('100ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'scale(1)' }),
        animate(
          '75ms ease-in',
          style({ opacity: 0, transform: 'scale(0.95)' })
        ),
      ]),
    ]),
  ],
})
export class AppointmentsComponent implements OnInit {
  showViewOptions = false;
  currentMonth: string;
  today: Date;
  displayModal: boolean;

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.today = startOfToday();
    this.currentMonth = format(this.today, 'MMMM yyyy');
    this.scrollToEvent();
    this.modalService.watch().subscribe((res) => {
      this.displayModal = res;
    });
  }

  toggleViewOptions() {
    this.showViewOptions = !this.showViewOptions;
  }

  scrollToEvent() {
    const el = document.getElementById('five-am');
    el?.scrollIntoView();
  }

  openModal() {
    this.modalService.open();
  }
}
