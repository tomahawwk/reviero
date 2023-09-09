import {
  ConvertValueToPriceProps,
  ValueType,
} from '@/app/components/ui/PriceText/types';

export const convertValueToPrice = (props: ConvertValueToPriceProps) => {
  let value: ValueType = Number(props.value);
  value = value.toLocaleString('en-US', {maximumFractionDigits: 0});
  value = props.currencyPosition === 'right' ? `${value}€` : `€${value}`;

  return value;
};
