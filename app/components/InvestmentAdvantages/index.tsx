'use client';
import {FC} from 'react';
import LazyImage from '@/app/components/ui/LazyImage'

const InvestmentAdvantages: FC = () => {
  return (
    <section className="grid w-full lg:grid-cols-2 gap-md max-lg:px-sm max-lg:mb-[80px]">
      <div className="rounded-lg bg-beigeLight p-lg flex flex-col gap-xs row-span-2 max-lg:px-sm">
        <LazyImage
          src="/images/advantages/advantage-1.png"
          width={126}
          height={167}
          alt="Invest Without Living the Couch"
          className="mb-[20px]"
        />
        <div className="text-[32px] font-medium leading-none">
          Invest Without Living the Couch
        </div>
        <p className="text-[18px]">
          All processes from purchase to getting income digitalized. We provide
          a full range of services to support our clients, from property1
          management and maintenance to marketing and guest services. We handle
          everything so that our clients can sit back, relax, and watch their
          investment grow. Investing with Reviero is simple and stress-free. We
          have a team of expert real estate professionals who can guide client
          through the entire process, from identifying the right property to
          closing the deal.
        </p>
      </div>
      <div className="rounded-lg bg-green p-lg gap-md flex max-lg:flex-col max-lg:px-sm">
        <LazyImage
          src="/images/advantages/advantage-2.png"
          width={180}
          height={153}
          alt="Invest Without Living the Couch"
          className="h-fit"
        />
        <div className="flex flex-col gap-xs">
          <div className="text-[32px] font-medium leading-none">
            True Passive Income
          </div>
          <p className="text-[18px]">
            Earn passive rental income and appreciation without lifting a
            finger.
          </p>
        </div>
      </div>
      <div className="rounded-lg bg-grey-500 p-lg gap-md flex max-lg:flex-col max-lg:px-sm">
        <LazyImage
          src="/images/advantages/advantage-3.png"
          width={180}
          minWidth={180}
          height={202}
          alt="Invest Without Living the Couch"
          className="h-fit"
        />
        <div className="flex flex-col gap-xs">
          <div className="text-[32px] font-medium leading-none">
            Spending a Vacations in your Own Second House
          </div>
          <p className="text-[18px]">
            And it's not just an investment it's your second house you can visit
            whenever you want. The rest of the time until you live there,
            property will be rented to guests
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvestmentAdvantages;
