'use client';
import {SettingsIcon} from '@/icons/Settings';
import {FC, useEffect, useState} from 'react';
import {IFilterButton} from '../types';
import { useMediaQuery } from 'react-responsive';
import breakpoints from '@/breakpoints';

const FilterButtonTouch: FC<IFilterButton> = ({onClick, filters}) => {
  const isTouch = useMediaQuery({query: `(max-width: ${breakpoints.lg}px)`});
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (filters) {
      setCount(
        filters.filter(item => !Object.keys(item).toString().includes('max'))
          .length,
      );
    }
  }, [filters]);
  if(isTouch) return (
    <button
      className="flex transition items-center gap-[12px] duration-400 mr-[40px] relative"
      onClick={onClick}>
      {count && count > 0 ? (
        <span
          className="absolute w-[17px] h-[17px] text-white bg-primary-main text-xs rounded-full
          font-bold flex justify-center items-center bottom-0 m-auto top-0 left-[-20px]">
          {count}
        </span>
      ) : null}
      <SettingsIcon width={24} height={24} className="text-black" />
    </button>
  );
  return null;
};

export default FilterButtonTouch;
