import {Component, DoCheck, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit,DoCheck {

  public propertyCus: any[] = new Array();

  constructor() {
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    console.log(this.propertyCus[1])
  }
}
