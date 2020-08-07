import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-mac-address-validation',
  templateUrl: './mac-address-validation.component.html',
  styleUrls: ['./mac-address-validation.component.scss']
})
export class MacAddressValidationComponent {
  private macAddress;

  constructor(private http: HttpClient) {
    this.macAddress = '';
  }

  requestMacInfo(macAddress) {
    const data = this.http
      .get('https://api.macaddress.io/v1?apiKey=at_BULmXFODqtiqHIVJ6CERtQ11sBwzn&output=json&search=' + macAddress);
    data.subscribe(e => console.log(e));
  }
}
