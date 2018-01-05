import { Injectable } from '@angular/core';

@Injectable()
/** Dummy version of an authenticated user service */
export class UserService {
  userName = 'Sherlock Holmes';
constructor(@Optional() config: UserServiceConfig) {
  if (config) { this._userName = config.userName; }
}
}