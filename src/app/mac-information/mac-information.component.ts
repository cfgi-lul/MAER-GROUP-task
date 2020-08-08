import {Component, OnInit} from '@angular/core';
import {MacServiceService} from '../macService.service';

@Component({
  selector: 'app-mac-information',
  templateUrl: './mac-information.component.html',
  styleUrls: ['./mac-information.component.scss']
})
export class MacInformationComponent implements OnInit {
  private macAddresses: Array<any>;

  constructor(private macService: MacServiceService) {
    this.macService.sharedMessage.subscribe(addresses => this.macAddresses = addresses);
  }

  ngOnInit() {
  }

}
