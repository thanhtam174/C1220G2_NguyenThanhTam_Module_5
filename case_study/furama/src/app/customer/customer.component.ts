import { Component, OnInit } from '@angular/core';
import {Customer} from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public customers: Customer[];

  constructor() {
    this.customers = new Array();
    this.customers.push(new Customer('KH-1234', 'Nguyen Van A', '12/05/1991', '1234567891', 'anguyen@gmail.com', 'Male', '0903245864', 'Da Nang', 'Platium'));
  }
  ngOnInit(): void {
  }

}
