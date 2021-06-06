import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent implements OnInit {

  number1: number = 0;
  number2: number = 0;
  result: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  add($envent: any): void {
    this.result = String(this.number1 + this.number2);
  }

  sub($envent: any): void {
    this.result = String(this.number1 - this.number2);
  }

  mul($envent: any): void {
    this.result = String(this.number1 * this.number2);
  }

  div($envent: any): void {
    if (this.number2 == 0) {
      this.result = 'cannot be divided by 0';
    } else {
      this.result = String(this.number1 / this.number2);
    }
  }

}
