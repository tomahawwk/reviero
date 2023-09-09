import {isNull, isUndefined} from 'lodash';

import {PriceTextProps} from './types';
import {convertValueToPrice} from './utils';

const PriceText: React.FC<PriceTextProps> = ({
  children,
  value,
  currencyPosition,
  ...rest
}) => {
  if (isNull(value) || isUndefined(value)) return null;

  return (
    <span {...rest}>
      {convertValueToPrice({value, currencyPosition})}
      {children}
    </span>
  );
};

export default PriceText;
