import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiURL: string = 'http://localhost:3000/employeeList';

  constructor(private http: HttpClient) {
  }

  getAllEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiURL);
  }

  findById(employeeId: number): Observable<Employee> {
    return this.http.get<Employee>(this.apiURL + "/" + employeeId);
  }

  addCustomer(newEmployee: Employee): Observable<Employee> {
    console.log(newEmployee);
    return this.http.post<Employee>(this.apiURL, newEmployee);
  }

  update(customer: Employee): Observable<void> {
    return this.http.put<void>(this.apiURL + "/" + customer.id, customer);
  }

  deleteById(id: number): Observable<Employee>{
    return this.http.delete<Employee>(this.apiURL+"/"+id);
  }
}
