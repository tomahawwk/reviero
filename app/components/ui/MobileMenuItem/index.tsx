import {ArrowRightIcon} from '@/icons/ArrowRight';
import {FC} from 'react';
import {IMobileMenuItem} from './types';

const MobileMenuItem: FC<IMobileMenuItem> = ({link, text}) => {
  return (
    <a href={link} className="flex justify-between bg-grey-500 items-center pl-md pr-sm py-sm
    rounded-md">
      <span className="font-medium text-[18px]">{text}</span>
      <span className="w-[44px] h-[44px] flex justify-center items-center rounded-sm
      border border-grey-600">
        <ArrowRightIcon
          width={22}
          height={22}
          className="text-black"
        />
      </span>
    </a>
  );
};

export default MobileMenuItem;
