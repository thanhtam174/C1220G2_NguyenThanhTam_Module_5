import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractDetailPageComponent } from './contract-detail-page/contract-detail-page.component';
import { ContractDetailCreateComponent } from './contract-detail-create/contract-detail-create.component';
import { ContractDetailEditComponent } from './contract-detail-edit/contract-detail-edit.component';
import { ContractDetailDeleteComponent } from './contract-detail-delete/contract-detail-delete.component';



@NgModule({
  declarations: [ContractDetailPageComponent, ContractDetailCreateComponent, ContractDetailEditComponent, ContractDetailDeleteComponent],
  imports: [
    CommonModule
  ]
})
export class ContractDetailModule { }
