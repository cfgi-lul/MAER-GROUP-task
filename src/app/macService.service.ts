import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MacServiceService {
  private macAddressInfoArr = new BehaviorSubject([]);
  observable = this.macAddressInfoArr.asObservable();

  constructor() {
  }

  setMacAddressInfoArr(addresses: Array<any>) {
    this.macAddressInfoArr.next(addresses);
  }
}
