import {FC} from 'react';
import {ITags} from './types';

const Tags: FC<ITags> = ({isCard}) => {
  return (
    <ul className={`${isCard && "absolute left-[16px] top-[16px] z-10"} flex flex-wrap gap-[8px]`}>
      <li className="rounded-[8px] bg-beige px-[12px] pb-[3px] pt-[4px] text-sm text-totalBlack">
        Spanish Visa
      </li>
      <li className="rounded-[8px] bg-primary-main px-[12px] pb-[3px] pt-[4px] text-sm text-white">
        Ready to rent
      </li>
    </ul>
  );
};

export default Tags;
