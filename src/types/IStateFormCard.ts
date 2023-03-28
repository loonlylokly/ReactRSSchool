import { IValid } from './IValid';

export type IStateFormCard = {
  name: string;
  descript: string;
  date: string;
  type: string;
  checkbox: string;
  availability: string;
  file: string;
  validation: Record<string, IValid>;
};
