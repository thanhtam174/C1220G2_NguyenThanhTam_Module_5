import { Component, OnInit } from '@angular/core';
import {Employee} from '../../model/employee';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.css']
})
export class EmployeePageComponent implements OnInit {

  employees: Employee[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
