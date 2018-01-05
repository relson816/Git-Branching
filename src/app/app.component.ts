import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: '<h1 highlight>{{title}}</h1>',
  styleUrls: ['./app.component.css']
})
export class TitleComponent {
  title = 'Angular Modules';
  user = '';

  constructor(userService: UserService) {
    this.user = userService.userName;
  }
}