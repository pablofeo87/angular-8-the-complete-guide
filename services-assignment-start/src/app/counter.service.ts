import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  counterToActive = 0;
  counterToInactive = 0;

  constructor() { }

  addActive() {
    this.counterToActive = this.counterToActive + 1;
  }

  addInactive() {
    this.counterToInactive = this.counterToInactive + 1;
  }
}
