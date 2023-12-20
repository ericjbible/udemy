import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonClick = false;

  onDisplayHidden() {
    if (this.buttonClick === false)
      this.buttonClick = true;
    else if (this.buttonClick === true)
      this.buttonClick = false;
  }
}
