import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html'
  template: `
  <app-title></app-title>
  <nav>
    <a routerLink="contact" routerLinkActive="active">Contact</a>
    <a routerLink="crisis"  routerLinkActive="active">Crisis Center</a>
    <a routerLink="heroes"  routerLinkActive="active">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
`
})
export class TitleComponent {
  title = 'Angular Modules';
  user = '';

  constructor(userService: UserService) {
    this.user = userService.userName;
  }
}