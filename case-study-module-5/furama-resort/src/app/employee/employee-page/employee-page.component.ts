import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Employee} from '../../model/employee';
import {Router} from '@angular/router';
import {EmployeeService} from '../../service/employee.service';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.css']
})
export class EmployeePageComponent implements OnInit {
  page: number =1;
  pageSize: number =5;

  subscription: Subscription;
  employees:Employee[]=[];
  tempId: number;
  employee:Employee;
  tempCode:string;

  constructor(private employeeService:EmployeeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loadListEmployee();
  }

  loadListEmployee(){
    this.subscription=this.employeeService.getAllEmployee().subscribe(
      employeeList => {
        this.employees=employeeList
      },error => {
        console.log(error)
      },
    );
  }

  send(id: number) {
    this.tempId = id;
    this.employeeService.findById(id).subscribe(data =>{
      this.employee = data;
      this.tempCode = this.employee.code;
    });
  }
  deleteEmployee(){
    let c = this.employeeService.deleteById(this.tempId).subscribe(() => {
      this.loadListEmployee();
    },e =>{
      console.log(e)
    });
  }
}
