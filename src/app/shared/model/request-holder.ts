import {Rent} from './rent';

export class RequestHolder {
  id: any;
  bundle: any;
  rentRequests: Rent[] = [];
  ownerEmail: any;
  constructor() {}
}
