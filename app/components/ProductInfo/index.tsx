import {FC} from 'react';
import PercentLabel from '../ui/PercentLabel';
import {IProductInfo} from './types';

const ProductInfo: FC<IProductInfo> = ({
  isCard,
  annualPercent,
  minPrice,
  maxPrice,
  showPercent,
}) => {
  return (
    <div
      className={`flex ${isCard ? 'gap-[12px]' : 'gap-[15px] xl:gap-[25px]'}`}>
      <div
        className={`flex flex-col gap-[6px] ${
          isCard ? '' : 'max-xs:gap-[10px]'
        }`}>
        <p className="text-sm md:text-md leading-none text-p">
          Asking price range
        </p>
        <b className={`${isCard ? 'text-xl' : 'text-[29px]'} leading-[1.1] font-medium`}>
          €{minPrice?.toLocaleString('en-US')}
          {maxPrice && `-€${maxPrice.toLocaleString('en-US')}`}
        </b>
      </div>
      <div
        className={`flex flex-col items-start gap-[6px] border-grey-400 border-l-[1px] ${
          isCard ? 'pl-[12px]' : 'pl-[15px] xl:pl-[25px] max-xs:pl-[10px]'
        }`}>
        <p className={`text-sm md:text-md leading-none text-p ${isCard ? "md:whitespace-nowrap" : "whitespace-nowrap"}`}>
          Est. annual income
        </p>
        <div className="flex gap-[8px] items-center leading-none">
          <PercentLabel isLarge={!isCard}>
            {annualPercent?.min.toFixed(1)}
            {annualPercent?.max && `-${annualPercent.max.toFixed(1)}`}%
          </PercentLabel>
          {showPercent &&
            <span className="text-p font-medium max-xs:hidden">
              €{(minPrice / 100 * annualPercent?.min).toLocaleString('en-US')}
            </span>
          }
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
