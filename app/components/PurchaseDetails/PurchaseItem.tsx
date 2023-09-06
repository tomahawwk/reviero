import {ArrowIcon} from '@/icons/Arrow';
import {FC, useState} from 'react';
import {Collapse} from 'react-collapse';
import {IPurchaseItem} from './types';

const PurchaseItem: FC<IPurchaseItem> = ({title, summary, children}) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  return (
    <div className="shadow-card rounded-md px-sm md:px-md py-sm">
      <button
        className="w-full text-left text-lg lg:text-[18px] font-medium
        flex gap-[10px] items-center pr-xs justify-between"
        onClick={() => setIsOpened(!isOpened)}>
        <div className="flex gap-[10px] items-center">
          <ArrowIcon
            width={12}
            height={8}
            className={`text-black duration-300 ${isOpened && 'rotate-180'}`}
          />
          <span>{title}</span>
        </div>
        <div className={`text-[16px] font-medium transition duration-300 ${isOpened ? "opacity-0" : ""}`}>
          {summary}
        </div>
      </button>
      <Collapse isOpened={isOpened}>
        <div className="pt-xs">{children}</div>
      </Collapse>
    </div>
  );
};

export default PurchaseItem;
