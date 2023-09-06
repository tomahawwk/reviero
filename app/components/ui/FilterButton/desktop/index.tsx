import breakpoints from '@/breakpoints';
import {SettingsIcon} from '@/icons/Settings';
import {FC, useEffect, useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import {IFilterButton} from '../types';

const FilterButtonDesktop: FC<IFilterButton> = ({onClick, filters}) => {
  const isDesktop = useMediaQuery({query: `(min-width: ${breakpoints.lg}px)`});
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (filters) {
      setCount(
        filters.filter(item => !Object.keys(item).toString().includes('max'))
          .length,
      );
    }
  }, [filters]);

  if (isDesktop)
    return (
      <button
        className={`flex rounded-[8px] transition items-center gap-[12px] relative
        ${
          count
            ? 'border-lightGreen border-2 hover:border-primary-main'
            : 'border-grey-600 border hover:border-grey-700'
        }
        duration-400 outline-none px-[20px] py-[12px]`}
        onClick={onClick}>
        <SettingsIcon width={24} height={24} className="text-black" />
        <span className="font-medium">Filter</span>
        {count && count > 0 ? (
          <span
            className="absolute w-[17px] h-[17px] text-white bg-primary-main text-xs rounded-full
          font-bold flex justify-center items-center top-[-8px] right-[-8px]">
            {count}
          </span>
        ) : null}
      </button>
    );
  return null;
};

export default FilterButtonDesktop;
