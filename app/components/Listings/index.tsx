'use client';

import {FC, useEffect, useRef, useState} from 'react';

// import SubscribeForm from '../SubscribeForm';
import ListingsDesktop from './desktop';
import ListingsTouch from './touch';
import breakpoints from '@/breakpoints';
import {useGetHousesQuery} from '@/app/store/reducers/marketplace/marketplace.api';
import {useMediaQuery} from 'react-responsive';

const Listings: FC = () => {
  const {data, isLoading} = useGetHousesQuery({limit: 4});
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const [hasElapsed, setHasElapsed] = useState<boolean>(true);
  const lessMD = useMediaQuery({query: `(max-width: ${breakpoints.md}px)`});

  useEffect(() => {
    if (isLoading) {
      timeout.current && clearTimeout(timeout.current);
      setHasElapsed(false);
      timeout.current = setTimeout(() => {
        setHasElapsed(true);
      }, 900);
    }
  }, [900, isLoading]);

  return (
    <section
      className="md:px-lg py-xl md:pt-[80px] md:pb-[88px] xl:px-xl bg-grey-500 rounded-lg flex flex-col
      gap-md lg:gap-[48px] items-start relative">
      <div className="t-h2 max-md:px-sm">Listings</div>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 w-full gap-lg lg:gap-md">
        {lessMD ? (
          <>
            {data?.items && (
              <ListingsTouch loading={hasElapsed} items={data?.items} />
            )}
            <div className="px-sm w-full">
              <a
                href="/marketplace"
                className="btn-primary w-fit max-md:w-full block">
                Marketplace
              </a>
            </div>
          </>
        ) : (
          data?.items && (
            <ListingsDesktop loading={hasElapsed} items={data?.items} />
          )
        )}
        {/* <div className="max-md:px-sm">
          <SubscribeForm />
        </div> */}
      </div>
      {!lessMD && (
        <a
          href="/marketplace"
          className="btn-primary w-fit max-md:w-full block">
          Marketplace
        </a>
      )}
    </section>
  );
};

export default Listings;
