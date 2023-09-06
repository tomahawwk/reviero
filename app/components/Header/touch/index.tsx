'use client';
import MenuBurger from '@/app/components/ui/MenuBurger';
import {setModalPayload} from '@/app/store/actions/modal';
import {getFiltersSelector} from '@/app/store/reducers/filters/filters';
import {getModalSelector} from '@/app/store/reducers/modal/modal';
import breakpoints from '@/breakpoints';
import Image from 'next/image';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {FC} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useMediaQuery} from 'react-responsive';
import {IHeader} from '../types';
import FilterButtonTouch from '@/app/components/ui/FilterButton/touch';

const HeaderTouch: FC<IHeader> = ({isStatic}) => {
  const isTouch = useMediaQuery({query: `(max-width: ${breakpoints.lg}px)`});
  const {filterParams} = useSelector(getFiltersSelector);
  const {menu, filters} = useSelector(getModalSelector);
  const pathname = usePathname();
  const dispatch = useDispatch();

  const menuClickHandler = () => {
    dispatch(setModalPayload('menu', !menu.open));
  };

  const filtersClickHandler = () => {
    dispatch(setModalPayload('filters', !filters.open));
  };

  if (isTouch)
    return (
      <>
        <MenuBurger clickEvent={menuClickHandler} isActive={menu.open} />
        <header
          className={`border-grey-400 z-20 bg-lightBlue ${
            !isStatic && 'sticky top-0 bg-white'
          }`}>
          <div className="wrapper flex w-full justify-between items-center">
            <Link href="/" className="py-xs sm:py-sm">
              <Image
                src="/images/logo.svg"
                width="100"
                height="40"
                alt="logo"
              />
            </Link>
            {pathname === '/marketplace' && (
              <FilterButtonTouch
                onClick={filtersClickHandler}
                filters={filterParams}
              />
            )}
          </div>
        </header>
      </>
    );
  return null;
};

export default HeaderTouch;
