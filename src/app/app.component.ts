import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-third-homework';
  data: number[] = [100, 105, 90];
  isCounterAvailable: boolean = false;
}
