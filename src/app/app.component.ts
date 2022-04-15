import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'counter-app-without-redux';
  counter: number;

  constructor() {
    this.counter = 20;
  }

  increase(): void {
    this.counter = this.counter + 1;
  }

  decrease(): void {
    this.counter = this.counter - 1;
  }
}
