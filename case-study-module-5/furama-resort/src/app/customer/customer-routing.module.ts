import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CustomerPageComponent} from './customer-page/customer-page.component';
import {CustomerDeleteComponent} from './customer-delete/customer-delete.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';

let routes: Routes = [
  {path: 'customer', component: CustomerPageComponent},
  {path: 'customer/create', component: CustomerCreateComponent},
  {path: 'customer/delete/:idCustomer', component: CustomerDeleteComponent},
  {path: 'customer/update/:idCustomer', component: CustomerEditComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class CustomerRoutingModule { }
