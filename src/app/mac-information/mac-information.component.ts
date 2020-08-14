import {Component} from '@angular/core';
import {MacServiceService} from '../macService.service';
import {IMacAddresInfo} from '../../requests/request';

@Component({
  selector: 'app-mac-information',
  templateUrl: './mac-information.component.html',
  styleUrls: ['./mac-information.component.scss']
})
export class MacInformationComponent {
  macAddresses: Array<IMacAddresInfo>;

  constructor(private macService: MacServiceService) {
    this.macService.observable.subscribe(addresses => this.macAddresses = addresses);
  }
}
