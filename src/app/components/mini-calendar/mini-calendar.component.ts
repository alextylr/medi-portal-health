import { Component, OnInit } from '@angular/core';
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfMonth,
  startOfToday,
  sub
} from 'date-fns';
import { Appointment } from 'src/app/interfaces/appointment';

@Component({
  selector: 'app-mini-calendar',
  templateUrl: './mini-calendar.component.html',
  styleUrls: ['./mini-calendar.component.scss'],
})
export class MiniCalendarComponent implements OnInit {
  firstDayOfCurrentMonth: Date;
  today: Date;
  days: Date[];
  currentMonth: string;
  colStartClasses = [
    '',
    'col-start-2',
    'col-start-3',
    'col-start-4',
    'col-start-5',
    'col-start-6',
    'col-start-7',
  ];
  selectedDay: Date;
  meetings = [
    {
      id: '1',
      name: 'Julia Jacklin',
      start: '1pm',
      startDateTime: '2023-06-13T15:00',
      endDateTime: '2023-06-13T18:00',
      isConfirmed: false,
      appointmentType: 'Offline, Consultation',
    },
    {
      id: '1',
      name: 'Julia Jacklin',
      start: '1pm',
      startDateTime: '2023-06-14T15:00',
      endDateTime: '2023-06-14T18:00',
      isConfirmed: false,
      appointmentType: 'Offline, Consultation',
    },
    {
      id: '1',
      name: 'Julia Jacklin',
      start: '1pm',
      startDateTime: '2023-06-27T15:00',
      endDateTime: '2023-06-27T18:00',
      isConfirmed: false,
      appointmentType: 'Offline, Consultation',
    },
    {
      id: '1',
      name: 'Phoebe Bridgers',
      start: '1pm',
      startDateTime: '2023-06-27T22:00',
      endDateTime: '2023-06-27T23:00',
      isConfirmed: true,
      appointmentType: 'Online, Check-up',
    },
    {
      id: '1',
      name: 'Elizabeth McAlpine',
      start: '1pm',
      startDateTime: '2023-06-29T11:00',
      endDateTime: '2023-06-29T14:00',
      isConfirmed: true,
      appointmentType: 'Offline, Check-up',
    },
    {
      id: '1',
      name: 'Lucy Dacus',
      start: '1pm',
      startDateTime: '2023-06-29T13:00',
      endDateTime: '2023-06-27T14:00',
      isConfirmed: true,
      appointmentType: 'Online, Consultation',
    },
  ];
  selectedDayMeetings: Appointment[] = [];

  constructor() {}

  ngOnInit(): void {
    this.today = startOfToday();
    this.currentMonth = format(this.today, 'MMMM yyyy');

    this.days = eachDayOfInterval({
      start: startOfMonth(this.today),
      end: endOfWeek(endOfMonth(this.today)),
    });

    this.firstDayOfCurrentMonth = parse(
      this.currentMonth,
      'MMMM yyyy',
      new Date()
    );
    this.setAppointmentList(this.today);
  }

  getColStartClass(i: number, day: Date) {
    let className = '';
    let isDaySelected = isEqual(this.selectedDay, day);
    if (i === 0) {
      className = this.colStartClasses[getDay(day)];
      // text-gray for dates apart of the next month
    } else if (!isSameMonth(day, this.firstDayOfCurrentMonth)) {
      className = 'text-portal-gray-300';
      // style for todays date when there is no selected date
    } else if (isToday(day) && !this.selectedDay) {
      className = 'selected-day';
      // style for selected date when the selected date is not today
    } else if (isDaySelected && !isToday(day)) {
      className = 'selected-day';
      // style for today when a different date is selected
    } else if (!isDaySelected && isToday(day)) {
      className = 'font-bold text-portal-purple-300 text-lg';
      // style for today when it is selected
    } else if (isDaySelected && isToday(day)) {
      className = 'selected-day';
      // style for days with appointments scheduled
    } else if (!isDaySelected && this.checkIfDayHasMeetings(day).length > 0 ) {
      className = 'font-bold'
    }
    return className;
  }

  nextMonth() {
    let firstDayOfNextMonth = add(this.firstDayOfCurrentMonth, { months: 1 });
    this.currentMonth = format(firstDayOfNextMonth, 'MMMM yyyy');
    -100;
    this.firstDayOfCurrentMonth = firstDayOfNextMonth;
    this.days = eachDayOfInterval({
      start: startOfMonth(firstDayOfNextMonth),
      end: endOfWeek(endOfMonth(firstDayOfNextMonth)),
    });
    return this.currentMonth;
  }

  previousMonth() {
    let firstDayOfPreviousMonth = sub(this.firstDayOfCurrentMonth, {
      months: 1,
    });
    this.currentMonth = format(firstDayOfPreviousMonth, 'MMMM yyyy');
    -100;
    this.firstDayOfCurrentMonth = firstDayOfPreviousMonth;
    this.days = eachDayOfInterval({
      start: startOfMonth(firstDayOfPreviousMonth),
      end: endOfWeek(endOfMonth(firstDayOfPreviousMonth)),
    });
    return this.currentMonth;
  }

  setSelectedDay(day: Date) {
    this.selectedDay = day;
  }

  setAppointmentList(day: Date) {
    this.selectedDayMeetings = this.checkIfDayHasMeetings(day);
   
  }

  checkIfDayHasMeetings(day: Date) {
    return this.meetings.filter((meeting) => {
      if (!isSameDay(day, parseISO(meeting.startDateTime))) {
        return false;
      } 
      return meeting;
    });
  }
}
