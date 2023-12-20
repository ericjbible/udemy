import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  buttonClick = false;
  arrayClickCount = 0;
  clickArray = [];

  onDisplayHidden() {
    if (this.buttonClick === false) {
      this.buttonClick = true;
    } else if (this.buttonClick === true) {
      this.buttonClick = false;
    }
    this.arrayClickCount = this.arrayClickCount + 1;

    this.clickArray.push(this.arrayClickCount);
    console.log(this.clickArray);
  }
  getColor() {
    return this.arrayClickCount >= 5 ? 'blue' : 'white';
  }
}
