import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CustomerService {

  apiURL: string = 'http://localhost:3000/customerList';

  constructor(private http: HttpClient) {
  }

  getAllCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiURL);
  }

  getAllTypeCustomer(): Observable<string[]> {
    return this.http.get<string[]>('http://localhost:3000/customerTypes');
  }

  findById(customerId: number): Observable<Customer> {
    return this.http.get<Customer>(this.apiURL + "/" + customerId);
  }

  addCustomer(newCustomer: Customer): Observable<Customer> {
    console.log(newCustomer);
    return this.http.post<Customer>(this.apiURL, newCustomer);
  }

  update(customer: Customer): Observable<void> {
    return this.http.put<void>(this.apiURL + "/" + customer.id, customer);
  }

  deleteById(id: number): Observable<Customer>{
    return this.http.delete<Customer>(this.apiURL+"/"+id);
  }
}
