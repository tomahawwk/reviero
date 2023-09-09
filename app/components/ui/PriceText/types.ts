export type ValueType = number | string | undefined | null;

export type ConvertValueToPriceProps = {
  value: ValueType;
  currencyPosition?: 'left' | 'right';
};

export type PriceTextProps = React.ComponentProps<'span'> &
  ConvertValueToPriceProps;
