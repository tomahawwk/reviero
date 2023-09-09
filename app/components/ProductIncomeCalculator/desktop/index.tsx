'use client';

import {FC, useState} from 'react';

import {IProductIncomeCalculator} from '../types';
import LazyImage from '@/app/components/ui/LazyImage';
import PercentTip from '@/app/components/ui/PercentTip';
import {PriceText} from '@/app/components/ui/PriceText';
import SliderRange from '@/app/components/ui/SliderRange';
import {calculateInflation} from '../utils';
import getNoun from '@/utils/getNoun';
import {useGetMacroeconomicQuery} from '@/app/store/reducers/calculations/calculations.api';

const DesktopProductIncomeCalculator: FC<IProductIncomeCalculator> = ({
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

  const [qr, setQR] = useState<number>(0);
  return (
    <div className="rounded-md shadow-card p-md grid grid-cols-[1fr_246px] gap-[32px]">
      <div className="flex flex-col gap-md border-r border-grey-400 pr-[32px]">
        <b className="text-[32px] font-medium">Income Calculator</b>
        <div className="flex flex-col gap-md">
          <div className="flex flex-col gap-xs">
            <span className="leading-none text-p text-md">Tenure</span>
            <div className="leading-none text-[18px]">
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
          <div className="flex flex-col gap-xs">
            <div className="pt-sm border-t border-grey-400 flex gap-md">
              <div className="flex flex-col gap-[8px]">
                <span className="leading-none text-md text-p">
                  Est. gross income, €
                </span>
                <PriceText
                  className="leading-none font-medium text-[28px]"
                  value={income?.annualAverage}
                />
              </div>
              {/* <div className="flex flex-col gap-[8px] items-start border-l border-grey-400 pl-md">
                <span className="leading-none text-md text-p">
                  Est. gross income, %
                </span>
                <PercentLabel
                  isLarge>{`${macroeconomic?.inflation}%`}</PercentLabel>
              </div> */}
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
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-sm">
        <div className="font-medium text-[18px] leading-none">
          Detailed Calculations
        </div>
        <p>Discover net profit, taxes, fees and mortgage options in our App</p>
        <div className="flex gap-sm">
          <button
            onClick={() => setQR(0)}
            className={`text-[15px] leading-none p-xs font-medium border rounded-sm
          w-full ${
            qr === 0 ? 'border-primary-main' : 'border-grey-600 text-p'
          }`}>
            App Store
          </button>
          <button
            onClick={() => setQR(1)}
            className={`text-[15px] leading-none p-xs font-medium border rounded-sm
          w-full border-grey-600 ${
            qr === 1 ? 'border-primary-main' : 'border-grey-600 text-p'
          }`}>
            Google Play
          </button>
        </div>
        <div className="bg-lightBlue w-full rounded-md p-sm flex justify-center h-fit">
          <LazyImage
            src={qr === 0 ? '/images/apple-qr.png' : '/images/qr.png'}
            width={130}
            height={130}
            className="rounded-xs overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default DesktopProductIncomeCalculator;
