import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomerPageComponent} from './customer-page/customer-page.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CustomerRoutingModule} from './customer-routing.module';
import {RouterModule} from '@angular/router';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {CustomerService} from '../service/customer.service';
import {SearchPipe} from './search.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';


@NgModule({
  declarations: [CustomerPageComponent, CustomerCreateComponent, CustomerEditComponent, SearchPipe],
  exports: [
    CustomerCreateComponent,
    CustomerPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomerRoutingModule,
    RouterModule,
    NgbPaginationModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    CustomerService
  ]
})
export class CustomerModule {
}
