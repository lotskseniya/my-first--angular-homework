import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-third-homework';
  data: number[] = [100, 105, 90];
  isCounterAvailable: boolean = true;

  func () {
    console.log("Works from APP!!!!!!!!!!!", this.data);
  }

  onChangeCounter () {
    this.isCounterAvailable = !this.isCounterAvailable;
    console.log("works")
  }

  addRandomData () {
    this.data.push(Math.floor(Math.random() * 150));
  }
}
