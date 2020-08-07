import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MacAddressValidationComponent} from './mac-address-validation/mac-address-validation.component';
import {MacInformationComponent} from './mac-information/mac-information.component';


const routes: Routes = [
  {path: 'validate-mac', component: MacAddressValidationComponent},
  {path: '', redirectTo: '/validate-mac', pathMatch: 'full'},
  {path: 'mac-information', component: MacInformationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
