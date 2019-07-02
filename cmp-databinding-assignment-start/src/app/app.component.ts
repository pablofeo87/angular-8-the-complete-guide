import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers: number[] = [];

  onGameStarted(number) {
    this.numbers.push(number);
  }

  onGameStopped() {
    this.numbers = [];
  }
}

