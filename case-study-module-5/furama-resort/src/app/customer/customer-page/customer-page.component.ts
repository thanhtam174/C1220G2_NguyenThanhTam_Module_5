import { Component, OnInit } from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit {

  page: number =1;
  pageSize: number =3;

  subscription: Subscription;
  customers:Customer[]=[];
  tempId: number;
  customer:Customer;
  tempCode:string;

  constructor(private customerService:CustomerService) {
   this.loadListCustomer();
  }

  ngOnInit(): void {
  }

  loadListCustomer(){
    this.subscription=this.customerService.getAllCustomer().subscribe(
      customerList => {
        this.customers=customerList
      }
    );
  }

  send(id: number) {
    this.tempId = id;
    this.customerService.findById(id).subscribe(data =>{
      this.customer = data;
      this.tempCode = this.customer.code;
    });
  }
  deleteCustomer(){
    let c = this.customerService.deleteById(this.tempId).subscribe(() => {
      this.loadListCustomer();
    },e =>{
      console.log(e)
    });
  }

}
