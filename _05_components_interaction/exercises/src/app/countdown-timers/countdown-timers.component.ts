import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown-timers',
  templateUrl: './countdown-timers.component.html',
  styleUrls: ['./countdown-timers.component.css']
})
export class CountdownTimersComponent implements OnInit {
  @Input()
  time: number;

  timeCurrent: number;

  interval: number;

  disabled: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    if (this.time < 0 || typeof this.time == 'undefined' || isNaN(Number(this.time))) {
      this.time = 11;
    }
    this.timeCurrent = this.time;
  }


  start() {
    if (this.timeCurrent <= 0) {
      this.disabled = true;
    } else {
      this.disabled = true;
      this.countdown();
    }
  }

  stop() {
    this.disabled = false;
    clearInterval(this.interval);
  }

  reset() {
    this.disabled = false;
    this.timeCurrent = this.time;
    this.stop();
  }

  countdown() {
    this.interval = setInterval(() => {
      this.timeCurrent--;
      if (this.timeCurrent == 0) {
        clearInterval(this.interval);
      }
    }, 1000);
  }
}
