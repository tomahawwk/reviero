import {FC} from 'react';
import {IPercentLabel} from './types';

const PercentLabel: FC<IPercentLabel> = ({children, isLarge}) => {
  return (
    <div
      className={`whitespace-nowrap rounded-[10px] bg-primary-light px-[7px] pb-[4px]
      pt-[5px] font-medium leading-none text-primary-dark ${isLarge && "text-[22px] max-xs:text-[16px]"}`}>
      {children}
    </div>
  );
};

export default PercentLabel;
