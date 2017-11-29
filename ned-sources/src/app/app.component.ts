import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  constructor() {
    
  }

  isUserLoggedIn()
  {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }

}
