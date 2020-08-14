import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MacAddressValidationComponent } from './mac-address-validation/mac-address-validation.component';
import { MacInformationComponent } from './mac-information/mac-information.component';
import {TabsetConfig, TabsModule} from 'ngx-bootstrap/tabs';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MacAddressValidationComponent,
    MacInformationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TabsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TabsetConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
