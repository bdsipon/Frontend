import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DualListBoxModule } from 'ng2-dual-list-box';
import { HttpModule } from '@angular/http';

import {
    HttpClientModule
} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        DualListBoxModule.forRoot(),
        BrowserModule,
        HttpModule,
        HttpClientModule,
        AngularDualListBoxModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
