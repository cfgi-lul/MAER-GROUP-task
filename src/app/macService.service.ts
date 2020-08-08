import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MacServiceService {
  private behaviorSubject = new BehaviorSubject([]);
  sharedMessage = this.behaviorSubject.asObservable();

  constructor() {
  }

  nextArray(addresses: Array<any>) {
    this.behaviorSubject.next(addresses);
  }
}
