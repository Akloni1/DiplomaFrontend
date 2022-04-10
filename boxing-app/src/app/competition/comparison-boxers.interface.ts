import { IBoxersCouple } from './comparison-boxers-couple.interface';
import { IBoxer } from './comparison-boxers-boxer.interface';
export interface IComparisonBoxers {
    res: {[key:string]:IBoxer}[];
    notPaired: IBoxer[];
  }
  