'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {FC} from 'react';
import {IMenu} from './types';
import AnimatedWord from '@/app/components/ui/AnimatedWord';

const Menu: FC<IMenu> = ({list, isHeader}) => {
  const pathname = usePathname();
  
  return (
    <ul className="flex h-full justify-center gap-lg lg:gap-xl mb-[-1px] flex-col md:flex-row">
      {list?.map(({text, url}) => (
        <li key={text}>
          <Link
            href={url}
            className={`flex h-full items-center font-medium whitespace-nowrap
            ${isHeader && 'border-b-2'} text-lg width-fit
            ${pathname === url && isHeader ? 'border-black pointer-events-none' : 'border-transparent'}`}>
            <AnimatedWord text={text} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
