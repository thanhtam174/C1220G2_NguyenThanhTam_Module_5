import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from '@angular/router';
import {CustomerPageComponent} from '../customer/customer-page/customer-page.component';
import {CustomerCreateComponent} from '../customer/customer-create/customer-create.component';
import {CustomerEditComponent} from '../customer/customer-edit/customer-edit.component';

let routes: Routes = [
  {path: 'employee', component: CustomerPageComponent},
  {path: 'employee/create', component: CustomerCreateComponent},
  {path: 'employee/update/:idCustomer', component: CustomerEditComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EmployeeRoutingModule { }
