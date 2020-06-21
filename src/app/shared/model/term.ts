import {Advertisement} from './advertisement';

export class Term {
  id: number;
  startDate: Date;
  endDate: Date;
  advertisement: Advertisement;
  writeReport: boolean;
  canceled: boolean;

}
