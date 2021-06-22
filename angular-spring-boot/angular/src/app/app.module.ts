import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from './shared/shared.module';
import {RoutingModule} from './routing.module';
import {RouterModule} from '@angular/router';
import {NhaDatModule} from './nha-dat/nha-dat.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    SharedModule,
    RoutingModule,
    RouterModule,
    NhaDatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
