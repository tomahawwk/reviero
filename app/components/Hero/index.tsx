'use client';
import ServiceLinks from '@/app/components/ServiceLinks';
import breakpoints from '@/breakpoints';
import {FC} from 'react';
import {useMediaQuery} from 'react-responsive';
import LazyImage from '../ui/LazyImage';

const Hero: FC = () => {
  const lessLG = useMediaQuery({query: `(max-width: ${breakpoints.lg}px)`});

  return (
    <section
      className="rounded-bl-lg rounded-br-lg lg:rounded-tr-lg lg:rounded-tl-lg lg:h-[640px]
      w-full grid lg:grid-cols-[7fr_3fr] xl:grid-cols-[6fr_4fr] max-lg:grid-rows-[1fr_200px]
      bg-contain bg-right bg-no-repeat bg-grey-500 overflow-hidden max-lg:mb-[80px]">
      <div className="p-lg max-lg:pb-[150px] max-lg:px-sm xl:py-xl xl:pl-xl flex flex-col gap-sm lg:pr-[220px]">
        <div className="text-[44px] lg:text-[48px] xl:text-[64px] font-medium leading-none">
          <span className="text-primary-main">The easiest way </span>
          <br className="max-lg:hidden" />
          to invest in Vacation Rentals
        </div>
        <p className="text-[18px] lg:text-xl">
          With Reviero you can experience the best of both worlds <br/> – owning a
          beautiful holiday home and enjoying a steady stream of rental income.
        </p>
        {!lessLG && <ServiceLinks isRow />}
      </div>
      <div className="relative">
        <img
          className="absolute lg:h-[95%] top-[-150px] lg:top-0 lg:left-[-240px] object-contain max-lg:w-full z-10"
          src="/images/phone.png"
        />
        <LazyImage
          className="h-full object-cover max-lg:w-full"
          src="/images/hero-background.jpg"
        />
      </div>
    </section>
  );
};

export default Hero;
