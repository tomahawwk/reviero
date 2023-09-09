'use client';

import {FC} from 'react';
import {IProductIncomeCalculator} from '../types';
import PercentTip from '@/app/components/ui/PercentTip';
import {PriceText} from '../../ui/PriceText';
import ServiceLinks from '@/app/components/ServiceLinks';
import SliderRange from '@/app/components/ui/SliderRange';
import {calculateInflation} from '../utils';
import getNoun from '@/utils/getNoun';
import {useGetMacroeconomicQuery} from '@/app/store/reducers/calculations/calculations.api';

const TouchProductIncomeCalculator: FC<IProductIncomeCalculator> = ({
  years,
  data,
  income,
  setYears,
}) => {
  const {data: macroeconomic} = useGetMacroeconomicQuery();

  const inflation = (macroeconomic?.inflation ?? 0) / 100;
  const totalPrice = calculateInflation(
    data?.data?.price ?? -1,
    inflation,
    years,
  );

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
                <PriceText
                  className="leading-none font-medium text-[28px]"
                  value={income?.annualAverage}
                />
              </div>
            </div>
            <div className="pt-sm border-t border-grey-400">
              <div className="flex flex-col gap-[8px]">
                <span className="leading-none text-md text-p">
                  Projected value after {years}{' '}
                  {getNoun(years, 'year', 'years', 'years')}
                </span>
                <div className="flex gap-[8px]">
                  <PriceText
                    className="text-[18px] font-medium"
                    value={totalPrice}
                  />
                  <PercentTip variant="dark" value={inflation * 100} />
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
