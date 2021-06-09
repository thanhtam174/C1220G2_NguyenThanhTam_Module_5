import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeComponent } from './employee/employee.component';
import { ServiceComponent } from './service/service.component';
import { ContractComponent } from './contract/contract.component';
import { ContractDetailComponent } from './contract-detail/contract-detail.component';
import {FormsModule} from '@angular/forms';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CreateServiceComponent } from './create-service/create-service.component';
import { CreateContractComponent } from './create-contract/create-contract.component';
import { PaginationModule } from 'ngx-pagination-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    EmployeeComponent,
    ServiceComponent,
    ContractComponent,
    ContractDetailComponent,
    CreateCustomerComponent,
    CreateEmployeeComponent,
    CreateServiceComponent,
    CreateContractComponent,
    PaginationModule
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
