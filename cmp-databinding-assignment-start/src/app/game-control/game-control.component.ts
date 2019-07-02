import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  counter = 0;
  @Output() stop = new EventEmitter<void>();
  @Output() tick = new EventEmitter<number>();
  tickInterval: any = null;

  constructor() {
  }

  onStartGame() {
    const self = this;
    this.tickInterval = setInterval(function() {
      self.counter++;
      self.tick.emit(self.counter);
    }, 1000);
  }

  onStopGame() {
    this.counter = 0;
    this.stop.emit();
    clearInterval(this.tickInterval);
  }

  ngOnInit() {
  }

}
