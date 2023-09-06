import {TriangleIcon} from '@/icons/Triangle';
import {FC} from 'react';
import {IPercentTip} from './types';

const PercentTip: FC<IPercentTip> = ({value, variant}) => {
  return (
    <div
      className={`whitespace-nowrap text-greenDark rounded-[8px] font-medium flex leading-none px-[5px] py-[3px]
      gap-[3px] text-md items-center ${variant === 'light' ? 'bg-primary-lightVariant' : 'bg-primary-light'}`}>
      <TriangleIcon width={8} height={8} />
      <span>{value}%</span>
    </div>
  );
};

export default PercentTip;
