import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  employeeForm = new FormGroup({
    code: new FormControl('',[Validators.required, Validators.pattern('^KH-[0-9]{4}$')]),
    name: new FormControl('',[Validators.required, Validators.pattern('^[A-Za-z ]+$')]),
    birthday: new FormControl('',[Validators.required]),
    idCard: new FormControl('',[Validators.required, Validators.pattern('^([0-9]{9}|[0-9]{12})$')]),
    email: new FormControl('',[Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
    gender: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required, Validators.pattern('^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)[0-9]{7}$')]),
    address: new FormControl('',[Validators.required]),
    position: new FormControl('',[Validators.required]),
    educationDegree: new FormControl('',[Validators.required]),
    division: new FormControl('',[Validators.required]),
    salary: new FormControl('',[Validators.required,Validators.min(0)]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  submit() {

  }

  get code() {
    return this.employeeForm.get('code');
  }

  get name() {
    return this.employeeForm.get('name');
  }

  get birthday() {
    return this.employeeForm.get('birthday');
  }

  get idCard() {
    return this.employeeForm.get('idCard');
  }

  get email() {
    return this.employeeForm.get('email');
  }

  get gender() {
    return this.employeeForm.get('gender');
  }

  get phone() {
    return this.employeeForm.get('phone');
  }

  get address() {
    return this.employeeForm.get('address');
  }

  get position() {
    return this.employeeForm.get('position');
  }

  get educationDegree() {
    return this.employeeForm.get('educationDegree');
  }

  get division() {
    return this.employeeForm.get('division');
  }

  get salary() {
    return this.employeeForm.get('salary');
  }

}
