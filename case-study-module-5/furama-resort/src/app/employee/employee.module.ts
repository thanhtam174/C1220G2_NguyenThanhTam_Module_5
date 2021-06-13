import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeDeleteComponent} from './employee-delete/employee-delete.component';
import {EmployeePageComponent} from './employee-page/employee-page.component';
import {EmployeeEditComponent} from './employee-edit/employee-edit.component';
import {EmployeeCreateComponent} from './employee-create/employee-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [EmployeeDeleteComponent, EmployeePageComponent, EmployeeEditComponent, EmployeeCreateComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule
    ]
})
export class EmployeeModule {
}
