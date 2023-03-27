import { IValid } from './IValid';

export type IStateFormCard = {
  name: string;
  validation: Record<string, IValid>;
};
