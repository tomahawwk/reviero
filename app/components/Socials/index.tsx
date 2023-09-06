import {FacebookIcon} from '@/icons/Facebook';
import {InstagramIcon} from '@/icons/Instagram';
import {LinkedInIcon} from '@/icons/LinkedIn';
import Link from 'next/link';
import {FC} from 'react';
import {ISocials} from './types';

const Socials: FC<ISocials> = ({isRounded}) => {
  return (
    <div className={`flex ${isRounded ? "gap-sm" : "gap-lg"}`}>
      <Link
        href="#"
        className={`${isRounded ? "w-full bg-grey-500 h-[48px]" : "w-[40px] h-[40px]"}  rounded-sm
        duration-300 flex items-center justify-center hover:bg-grey-500`}>
        <FacebookIcon width={18} height={18} className={`${isRounded ? "text-black" : "text-grey-700"}`} />
      </Link>
      <Link
        href="#"
        className={`${isRounded ? "w-full bg-grey-500 h-[48px]" : "w-[40px] h-[40px]"}  rounded-sm
        duration-300 flex items-center justify-center hover:bg-grey-500`}>
        <InstagramIcon width={18} height={18} className={`${isRounded ? "text-black" : "text-grey-700"}`} />
      </Link>
      <Link
        href="#"
        className={`${isRounded ? "w-full bg-grey-500 h-[48px]" : "w-[40px] h-[40px]"}  rounded-sm
        duration-300 flex items-center justify-center hover:bg-grey-500`}>
        <LinkedInIcon width={18} height={18} className={`${isRounded ? "text-black" : "text-grey-700"}`} />
      </Link>
    </div>
  );
};

export default Socials;
