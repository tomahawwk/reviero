import {ArrowIcon} from '@/icons/Arrow';
import {FC, useState} from 'react';
import {Collapse} from 'react-collapse';
import {IFAQItem} from './types';

const FAQItem: FC<IFAQItem> = ({title, content, index}) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <div className="w-full border-grey-400 border-b-[1px] last:border-none">
      <button
        className={`w-full text-left pb-sm lg:pb-md text-lg lg:text-[18px] font-medium
        flex gap-[10px] items-center pr-xs pt-sm ${
          index == 0
            ? 'max-md:border-t-[1px] border-grey-400 md:pt-0'
            : 'lg:pt-md'
        }`}
        onClick={() => setIsOpened(!isOpened)}>
        <ArrowIcon
          width={12}
          height={8}
          className={`text-black duration-300 ${isOpened && 'rotate-180'}`}
        />
        <span>{title}</span>
      </button>
      <Collapse isOpened={isOpened}>
        <div className="pb-sm lg:pb-md max-w-lg text-lg lg:text-[18px] text-grey-800 px-[22px] md:pl-0">
          {content}
        </div>
      </Collapse>
    </div>
  );
};

export default FAQItem;
