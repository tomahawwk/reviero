import breakpoints from '@/breakpoints';
import {ArrowIcon} from '@/icons/Arrow';
import {map, max, min} from 'lodash';
import {usePathname} from 'next/navigation';
import {FC, useState} from 'react';
import {Collapse} from 'react-collapse';
import {useMediaQuery} from 'react-responsive';
import ApartmentCard from '../ApartmentCard';
import PercentLabel from '../ui/PercentLabel';
import {IApartmentItem} from './types';

const ApartmentItem: FC<IApartmentItem> = ({type, list}) => {
  const lessLG = useMediaQuery({query: `(max-width: ${breakpoints.lg}px)`});
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <div className="border-b-[1px] border-grey-400 last:border-none">
      <button
        onClick={() => setIsOpened(!isOpened)}
        className="flex w-full justify-between py-sm">
        <div className="flex items-center gap-[10px]">
          <ArrowIcon
            width={12}
            height={8}
            className={`text-black duration-300 ${isOpened && 'rotate-180'}`}
          />
          <span className="text-[18px] font-medium">{type} bedroom</span>
          {list && list.length > 0 && (
            <span
              className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-grey-400
              font-medium leading-4">
              {list.length}
            </span>
          )}
        </div>
        <div className="flex items-center gap-[12px]">
          {!lessLG && (
            <b className="text-[18px] font-medium">
              €{min(map(list, 'data.price')).toLocaleString('en-US')}
              -€
              {max(map(list, 'data.price')).toLocaleString('en-US')}
            </b>
          )}
          <PercentLabel>
            {Number(
              min(map(list, 'annualIncome.percent')).toFixed(1),
            ).toLocaleString('en-US')}
            -
            {Number(
              max(map(list, 'annualIncome.percent')).toFixed(1),
            ).toLocaleString('en-US')}
            %
          </PercentLabel>
        </div>
      </button>
      <Collapse isOpened={isOpened}>
        <div className="grid gap-[15px]">
          {list?.map(item => {
            return (
              <ApartmentCard
                key={item.id}
                item={item}
                link={`${pathname}/${item.id}`}
              />
            );
          })}
        </div>
      </Collapse>
    </div>
  );
};

export default ApartmentItem;
