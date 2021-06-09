import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit {
  rating: number = 3;
  colors: string[] = ['yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow'];


  constructor() {
  }

  ngOnInit(): void {
    this.choose();
  }

  onClick(idx: number) {
    this.rating = idx;
    this.choose();
  }

  choose() {
    for (let i: number = 0; i <= this.rating; i++) {
      this.colors[i] = 'red';
    }
    for (let j: number = this.rating + 1; j < this.colors.length; j++) {
      this.colors[j] = 'yellow';
    }
  }
}
