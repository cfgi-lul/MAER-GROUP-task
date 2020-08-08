import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MacServiceService} from '../macService.service';


@Component({
  selector: 'app-mac-address-validation',
  templateUrl: './mac-address-validation.component.html',
  styleUrls: ['./mac-address-validation.component.scss']
})
export class MacAddressValidationComponent {
  private macAddress: string;
  public macAddressInfo: Array<any>;
  public macRegex: RegExp;

  constructor(private http: HttpClient, private macService: MacServiceService) {
    this.macRegex = new RegExp('^[\\da-f]{2}:[\\da-f]{2}:[\\da-f]{2}:[\\da-f]{2}:[\\da-f]{2}:[\\da-f]{2}$', 'gsi');
    this.macAddressInfo = new Array<any>();
    this.macService.sharedMessage.subscribe(addresses => this.macAddressInfo = addresses);
    this.macAddress = '';
  }

  macValidate(mac) {
    return this.macRegex.test(mac) && this.macAddressInfo.filter(e => e.macAddressDetails.searchTerm === mac).length === 0;
  }

  requestMacInfo(macAddress) {
    if (this.macValidate(macAddress)) {
      this.macValidate(macAddress);
      const data = this.http
        .get('https://api.macaddress.io/v1?apiKey=at_BULmXFODqtiqHIVJ6CERtQ11sBwzn&output=json&search=' + macAddress);
      data.subscribe(e => {
        this.macAddressInfo.push(e);
        this.macService.nextArray(this.macAddressInfo);
      });
    }
  }
}
