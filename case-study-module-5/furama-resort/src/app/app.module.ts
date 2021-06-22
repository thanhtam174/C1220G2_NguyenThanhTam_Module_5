import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContractDetailPageComponent } from './contract-detail/contract-detail-page/contract-detail-page.component';
import {CustomerModule} from './customer/customer.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {EmployeeModule} from './employee/employee.module';

@NgModule({
  declarations: [
    AppComponent,
    ContractDetailPageComponent
  ],
  imports: [
    BrowserModule,
    CustomerModule,
    NgbModule,
    RouterModule,
    EmployeeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
