import Menu from '@/app/components/Menu';
import ServiceLinks from '@/app/components/ServiceLinks';
import breakpoints from '@/breakpoints';
import Image from 'next/image';
import Link from 'next/link';
import {FC} from 'react';
import {useMediaQuery} from 'react-responsive';
import Socials from '../Socials';

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
  {
    text: 'Blog',
    url: '/',
  },
];

const Footer: FC = () => {
  const lessLG = useMediaQuery({query: `(max-width: ${breakpoints.lg}px)`});

  return (
    <footer
      className="w-full mt-auto border-t border-grey-400 flex flex-col
      gap-sm items-start">
      <div className="flex justify-between wrapper py-md flex-col md:flex-row gap-lg md:gap-0 w-full">
        <div className="flex flex-col gap-lg">
          <Link href="/">
            <Image src="/images/logo.svg" width={lessLG ? "100" : "140"} height="40" alt="logo" />
          </Link>
          <Menu list={menu} />
        </div>
        <Socials />
      </div>
      <div className="wrapper w-full">
        <ServiceLinks isRow />
      </div>
      <div className="flex w-full justify-between wrapper py-md flex-col-reverse md:flex-row gap-md md:gap-0">
        <p className="text-sm text-p">
          Copyright © 2023 Reviero. All rights reserved.
        </p>
        <a href="#" className="link-bordered text-sm w-fit">
          Policies, Terms of Service, and Income Disclosure
        </a>
      </div>
    </footer>
  );
};

export default Footer;
