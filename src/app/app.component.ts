import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html'
  template: `
  <app-title></app-title>
  <app-contact></app-contact>
`
})
export class TitleComponent {
  title = 'Angular Modules';
  user = '';

  constructor(userService: UserService) {
    this.user = userService.userName;
  }
}