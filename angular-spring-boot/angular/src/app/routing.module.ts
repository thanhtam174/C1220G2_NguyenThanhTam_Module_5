import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './nha-dat/list/list.component';
import {CreateComponent} from './nha-dat/create/create.component';

let routes: Routes = [
  {path: 'nha-dat', component: ListComponent},
  {path: 'nha-dat/create', component: CreateComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class RoutingModule { }
