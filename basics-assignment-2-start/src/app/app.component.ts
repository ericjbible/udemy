import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  username1 = '';
  onUpdateUsername() {
    this.username1 = this.username;
    return this.username = '';
  }
}
