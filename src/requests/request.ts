import {HttpClient} from '@angular/common/http';
import {NgModule} from '@angular/core';

@NgModule({})
export class Request {

  constructor(private httpClient: HttpClient) {
  }

  macInfoRequest(macAddress: string) {
    return this.httpClient.get(`https://api.macaddress.io/v1?apiKey=at_BULmXFODqtiqHIVJ6CERtQ11sBwzn&output=json&search=${macAddress}`);
  }
}

export interface IMacAddresInfo {
  vendorDetails: {
    oui: number;
    isPrivate: boolean;
    companyName: string;
    companyAddress: string;
    countryCode: string;
  };
  blockDetails: {
    blockFound: boolean;
    borderLeft: string;
    borderRight: string;
    blockSize: number;
    assignmentBlockSize: string;
    dateCreated: string;
    dateUpdated: string;
  };
  macAddressDetails: {
    searchTerm: string;
    isValid: boolean;
    virtualMachine: string;
    applications: Array<string>;
    transmissionType: string;
    administrationType: string;
    wiresharkNotes: string;
    comment: string;
  };
}
