import Link from 'next/link';
import {FC, useEffect, useState} from 'react';
import {isAndroid, isIOS} from 'react-device-detect';
import {IServiceLinks} from './types';
import {useMediaQuery} from 'react-responsive';
import breakpoints from '@/breakpoints';

const ServiceLinks: FC<IServiceLinks> = ({isRow}) => {
  const [device, setDevice] = useState<string>();
  const moreLG = useMediaQuery({query: `(min-width: ${breakpoints.lg}px)`});

  useEffect(() => {
    if(isIOS)
      setDevice("ios")

    if(isAndroid)
      setDevice("android")
  })

  return (
    <div
      className={`mt-[10px] relative md:mt-[20px] gap-xs ${
        isRow ? 'flex flex-wrap' : 'grid'
      }`}>
      {(device === "ios" || moreLG) &&
        <Link href="https://apps.apple.com/tr/app/reviero-holiday-rental-invests/id6450902754" className="relative block h-[52px] w-[170px]">
          <img src="/images/app-store.png" className="h-full w-full" />
        </Link>
      }
      {(device === "android" || moreLG) &&
        <Link href="#" className="relative block h-[52px] w-[170px]">
          <img src="/images/google-play.png" className="h-full w-full" />
        </Link>
      }
    </div>
  );
};

export default ServiceLinks;
