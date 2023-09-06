'use client';
import {FC} from 'react';
import {IHeader} from './types';
import HeaderDesktop from '@/app/components/Header/desktop';
import HeaderTouch from '@/app/components/Header/touch';

const menu = [
  {
    text: 'Marketplace',
    url: '/marketplace',
  },
  {
    text: 'Get_Mobile_App',
    url: '/mobile-app',
  },
  {
    text: 'FAQ',
    url: '/faq',
  },
];

const Header: FC<IHeader> = ({isStatic}) => {
  return (
    <>
      <HeaderDesktop isStatic={isStatic} menu={menu} />
      <HeaderTouch isStatic={isStatic} />
    </>
  )
};

export default Header;
