'use client';
import SliderRange from '@/app/components/ui/SliderRange';
import getNoun from '@/utils/getNoun';
import {FC, useState} from 'react';
import PercentTip from '@/app/components/ui/PercentTip';

const IncomeCalculator: FC = () => {
  const [propertyPrice, setPropertyPrice] = useState<number>(500000);
  const [years, setYears] = useState<number>(3);

  return (
    <section
      className="md:px-lg py-xl md:pt-[80px] md:pb-[88px] xl:px-xl bg-grey-500 rounded-lg flex flex-col
      gap-md lg:gap-[48px] items-start relative max-lg:px-sm">
      <div className="flex justify-between w-full gap-md max-xl:flex-col">
        <div className="t-h2 max-lg:text-[36px]">
          Expected Income Calculator
        </div>
        <p className="max-w-[430px] text-[18px]">
          We show how your earnings will grow. All calculations below are only
          relevant for Marbella, Spain
        </p>
      </div>
      <div
        className="px-sm py-md rounded-md md:pt-[48px] md:px-[48px] md:pb-[64px] bg-grey-400 w-full grid
        lg:grid-cols-[55fr_45fr] gap-xl">
        <div className="flex flex-col gap-lg">
          <div className="flex flex-col gap-sm">
            <span className="leading-none text-p max-lg:text-md">Tenure</span>
            <div className="text-[32px] font-medium leading-none max-lg:text-title">
              {years} {getNoun(years, 'year', 'years', 'years')}
            </div>
            <SliderRange
              min={1}
              max={15}
              step={1}
              value={years}
              setValue={setYears}
            />
          </div>
          <div className="flex flex-col gap-sm bg-white px-sm pt-sm rounded-sm pb-[4px]">
            <span className="leading-none text-p max-lg:text-md">Property purchase price</span>
            <div className="text-[32px] font-medium leading-none max-lg:text-title">
              €{propertyPrice.toLocaleString('en-US')}
            </div>
            <SliderRange
              min={100000}
              max={1300000}
              step={100000}
              value={propertyPrice}
              setValue={setPropertyPrice}
            />
          </div>
        </div>
        <div className="py-md px-md lg:px-lg rounded-md bg-cover bg-[url(/images/projected-background.jpg)]
          flex flex-col gap-md">
          <div className="flex flex-col gap-xs">
            <span className="text-marineVariant leading-none">Projected gross rent income</span>
            <div className="text-white text-[40px] lg:text-[48px] leading-none">€143,300</div>
          </div>
          <div className="flex flex-col gap-xs border-t border-marineDark pt-md">
            <span className="text-marineVariant leading-none">Projected value after 3 year</span>
            <div className="flex items-center gap-[8px]">
              <div className="text-white text-title leading-none">€545,000</div>
              <PercentTip variant="light" value={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncomeCalculator;
