import LazyImage from '@/app/components/ui/LazyImage';
import breakpoints from '@/breakpoints';
import {useMediaQuery} from 'react-responsive';
import ServiceLinks from '../ServiceLinks';

const Invest = () => {
  const lessLG = useMediaQuery({query: `(max-width: ${breakpoints.lg}px)`});

  return (
    <div className="rounded-lg w-full overflow-hidden max-lg:mb-[80px]">
      <div className="h-[440px] lg:h-[600px] relative">
        <LazyImage
          src="/images/invest-background.jpg"
          className="object-cover h-full w-full"
        />
        <div
          className="flex flex-col absolute lg:left-[50%] top-xl gap-[6px] z-10
                    left-0 right-0 m-auto w-fit">
          {!lessLG && (
            <LazyImage
              src="/images/notification-1.svg"
              width={444}
              height={107}
              className="object-none"
            />
          )}
          <LazyImage
            src="/images/notification-2.svg"
            height={107}
            className="object-fit lg:object-none max-sm:w-[calc(100%-32px)] max-sm:left-0 max-sm:right-0 max-sm:m-auto"
          />
        </div>
      </div>
      <div className="px-sm py-xl lg:px-xl bg-beige flex flex-col items-center gap-xs">
        <div className="font-medium text-center text-[36px] lg:text-[48px] leading-none">
          Invest Smarter, Invest Easier
        </div>
        <ServiceLinks isRow />
      </div>
    </div>
  );
};

export default Invest;
