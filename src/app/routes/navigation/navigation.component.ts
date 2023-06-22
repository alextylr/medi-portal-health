import { Component, OnInit } from '@angular/core';
import { NavItem } from '../../interfaces/to-do-list';
import { MockNavigationService } from '../../services/mock-navigation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  navigationItems: NavItem[];
  isSideBarOpen: boolean = false;
 
  constructor(private navigationService: MockNavigationService, private router: Router) { }

  ngOnInit(): void {
    this.navigationService.getNavigationItems().subscribe(navigationItems => {
      this.navigationItems = navigationItems;
    });
    this.router.navigateByUrl('/overview');

  }

}
