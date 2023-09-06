'use client';
import Image from 'next/image';
import Link from 'next/link';
import {FC} from 'react';
import {IHeader} from '../types';
import Menu from '@/app/components/Menu';
import { useMediaQuery } from 'react-responsive';
import breakpoints from '@/breakpoints';

const HeaderDesktop: FC<IHeader> = ({isStatic, menu}) => {
  const isDesktop = useMediaQuery({query: `(min-width: ${breakpoints.lg}px)`});
  if(isDesktop) return (
    <header
      className={`border-grey-400 z-20  lg:border-b bg-lightBlue ${
        !isStatic && 'sticky top-0 bg-white'
      }`}>
      <div className="wrapper flex lg:grid w-full lg:grid-cols-3 max-lg:justify-between max-lg:items-center">
        <Link href="/" className="py-xs sm:py-sm">
          <Image src="/images/logo.svg" width={140} height="40" alt="logo" />
        </Link>
        <Menu list={menu} isHeader />
      </div>
    </header>
  )
  return null;
};

export default HeaderDesktop;
