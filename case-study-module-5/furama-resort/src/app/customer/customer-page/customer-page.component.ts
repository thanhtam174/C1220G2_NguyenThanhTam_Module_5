import { Component, OnInit } from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit {

  page: number =1;
  pageSize: number =5;

  subscription: Subscription;
  customers:Customer[]=[];
  tempId: number;
  customer:Customer;
  tempCode:string;
  searchByName:string;
  searchByNameApi:string='';
  fromDate:string='';
  toDate:string='';

  constructor(private customerService:CustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loadListCustomer();
  }

  loadListCustomer(){
    this.subscription=this.customerService.getAllCustomer().subscribe(
      customerList => {
        this.customers=customerList
      },error => {
        console.log(error)
      },
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

  searchNameApi() {
    let searchUrl:string ='';
    if (this.searchByNameApi!='' || this.fromDate != '' || this.toDate != ''){
      this.customerService.searchName(this.searchByNameApi,this.fromDate,this.toDate).subscribe(value => {
        this.customers=value;
      });
    }else {
      this.loadListCustomer();
    }
  }
}
