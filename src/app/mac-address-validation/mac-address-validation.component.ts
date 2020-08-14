import {Component} from '@angular/core';
import {MacServiceService} from '../macService.service';
import {IMacAddresInfo, Request} from '../../requests/request';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-mac-address-validation',
  templateUrl: './mac-address-validation.component.html',
  styleUrls: ['./mac-address-validation.component.scss'],
  providers: [Request]
})

export class MacAddressValidationComponent {
  private readonly macRegex: RegExp;
  macAddress: FormControl;
  macAddressInfo: Array<IMacAddresInfo>;

  constructor(private macService: MacServiceService, private request: Request) {
    this.macRegex = new RegExp('^[\\da-f]{2}:[\\da-f]{2}:[\\da-f]{2}:[\\da-f]{2}:[\\da-f]{2}:[\\da-f]{2}$', 'gsi');
    this.macAddressInfo = new Array<IMacAddresInfo>();
    this.macService.observable.subscribe(addresses => this.macAddressInfo = addresses);
    this.macAddress = new FormControl('', [Validators.required , Validators.pattern(this.macRegex)]);
  }

  requestMacInfo(macAddress) {
    if (this.macAddressInfo.filter(e => e.macAddressDetails.searchTerm === macAddress).length === 0) {
      const data = this.request.macInfoRequest(macAddress);
      data.subscribe((e: IMacAddresInfo) => {
        this.macAddressInfo.push(e);
        this.macService.setMacAddressInfoArr(this.macAddressInfo);
      });
    }
  }
}
