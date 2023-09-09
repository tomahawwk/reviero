import {GetEstimateIncomeResponse} from '@/app/store/reducers/calculations/calculations.api';
import {Property} from '@/app/@types/protobuf-types';

export type ProductIncomeCalculatorProps = {
  data?: Property;
};

export type IProductIncomeCalculator = ProductIncomeCalculatorProps & {
  years: number;
  setYears: (years: number) => void;
  income?: GetEstimateIncomeResponse;
};
