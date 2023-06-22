import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NavItem } from '../interfaces/to-do-list';

@Injectable({
  providedIn: 'root'
})
export class MockNavigationService {
  navItems: NavItem[] = [
    { 
      title: 'Overview',
      route: '/overview',
      activeIconPath: '../../assets/svg/home-active.png',
      inactiveIconPath: '../../assets/svg/home-inactive.png',
    },
    { 
      title: 'Patients',
      route: '/patient-list',
      activeIconPath: '../../assets/svg/group-active.png',
      inactiveIconPath: '../../assets/svg/group-inactive.png',
    },
    { 
      title: 'Appointments',
      route: '/appointments',
      activeIconPath: '../../assets/svg/calendar-active.png',
      inactiveIconPath: '../../assets/svg/calendar-inactive.png',
    },
    { 
      title: 'Settings',
      route: '/settings',
      activeIconPath: '../../assets/svg/settings-active.png',
      inactiveIconPath: '../../assets/svg/settings-inactive.png',
    },
  ];

  constructor() { }

  getNavigationItems(): Observable<NavItem[]> {
    return of(this.navItems)
  }
}
