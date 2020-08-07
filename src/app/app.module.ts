import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MacAddressValidationComponent } from './mac-address-validation/mac-address-validation.component';
import { MacInformationComponent } from './mac-information/mac-information.component';

@NgModule({
  declarations: [
    AppComponent,
    MacAddressValidationComponent,
    MacInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
