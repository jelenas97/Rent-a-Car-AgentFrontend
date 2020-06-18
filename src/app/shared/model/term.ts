import {Advertisement} from './advertisement';

export class Term {
  id: number;
  startDate: Date;
  endDate = new Date();
  advertisement: Advertisement;
  writeReport: boolean;

}
