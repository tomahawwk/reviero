'use client';
import PercentTip from '@/app/components/ui/PercentTip';
import SliderRange from '@/app/components/ui/SliderRange';
import {FC} from 'react';
import {IProductIncomeCalculator} from '../types';
import ServiceLinks from '@/app/components/ServiceLinks';

const TouchProductIncomeCalculator: FC<IProductIncomeCalculator> = ({
  years,
  setYears,
}) => {
  return (
    <div className="rounded-md shadow-card p-sm">
      <div className="flex flex-col gap-md">
        <b className="text-[18px] font-medium">Income Calculator</b>
        <div className="flex flex-col gap-xs">
          <div className="flex flex-col">
            <span className="leading-none text-p text-md">
              Select number of years
            </span>
            <div className="flex gap-xs items-center">
              <SliderRange
                min={1}
                max={15}
                step={1}
                value={years}
                setValue={setYears}
              />
              <span className="text-[32px] text-primary-main font-medium leading-none w-[40px] text-right">
                {years}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-xs">
            <div>
              <div className="flex flex-col gap-[8px]">
                <span className="leading-none text-md text-p">
                  Est. gross rental income
                </span>
                <p className="leading-none font-medium text-[28px]">€143,300</p>
              </div>
            </div>
            <div className="pt-sm border-t border-grey-400">
              <div className="flex flex-col gap-[8px]">
                <span className="leading-none text-md text-p">
                  Projected value after 1 year
                </span>
                <div className="flex gap-[8px]">
                  <span className="text-[18px] font-medium">€345,000</span>
                  <PercentTip variant="dark" value={4} />
                </div>
              </div>
            </div>
            <div className="pt-sm border-t border-grey-400 flex flex-col gap-xs">
              <div className="font-medium text-[18px] leading-none">
                Detailed Calculations
              </div>
              <p className="text-lg">
                Discover net profit, taxes, fees and mortgage options in our App
              </p>
              <ServiceLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouchProductIncomeCalculator;
