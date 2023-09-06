'use client';
import breakpoints from '@/breakpoints';
import {FC} from 'react';
import {useMediaQuery} from 'react-responsive';

const MonthlyRevenue: FC = () => {
  const lessLG = useMediaQuery({query: `(max-width: ${breakpoints.lg}px)`});

  return (
    <section
      className="rounded-br-lg rounded-bl-lg lg:rounded-lg lg:h-[410px] bg-[url(/images/revenue-background.jpg)]
      px-sm py-xl md:pt-[80px] md:pb-[88px] max-lg:flex-col w-full bg-cover lg:px-xl flex justify-between gap-lg lg:gap-md">
      <div className="lg:max-w-[500px] flex flex-col gap-md">
        <div className="text-[44px] lg:text-[56px] font-medium leading-none text-white">
          <span className="text-primary-lightVariant">+160%</span> more
        </div>
        <p className="text-xl text-white">
          Vacation rentals generate up to 160% more revenue on average than
          traditional long-term rentals.
        </p>
        {!lessLG && (
          <a
            href="/marketplace"
            className="btn-secondary border-white bg-white text-black w-fit">
            Marketplace
          </a>
        )}
      </div>
      <div className="grid lg:w-[40%] gap-xs">
        <div className="text-white text-[21px]">Average monthly revenue</div>
        <img
          src="/images/revenue-graph.svg"
          className="w-full"
          alt="Average monthly revenue"
        />
      </div>
    </section>
  );
};

export default MonthlyRevenue;
