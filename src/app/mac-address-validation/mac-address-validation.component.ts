import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MacServiceService} from '../macService.service';
import {add} from 'ngx-bootstrap/chronos';


@Component({
  selector: 'app-mac-address-validation',
  templateUrl: './mac-address-validation.component.html',
  styleUrls: ['./mac-address-validation.component.scss']
})
export class MacAddressValidationComponent {
  private macAddress: string;
  public macAddressInfo: Array<any>;

  constructor(private http: HttpClient, private macService: MacServiceService) {
    this.macAddressInfo = new Array<any>();
    this.macService.sharedMessage.subscribe(addresses => this.macAddressInfo = addresses);
    this.macAddress = '';
  }


  requestMacInfo(macAddress) {
    console.log(this.macAddressInfo);
    const data = this.http
      .get('https://api.macaddress.io/v1?apiKey=at_BULmXFODqtiqHIVJ6CERtQ11sBwzn&output=json&search=' + macAddress);
    data.subscribe(e => {
      this.macAddressInfo.push(e);
      this.macService.nextArray(this.macAddressInfo);
    });
  }
}
