'use client';

import DesktopProductIncomeCalculator from './desktop';
import {ProductIncomeCalculatorProps} from '@/app/components/ProductIncomeCalculator/types';
import TouchProductIncomeCalculator from './touch';
import breakpoints from '@/breakpoints';
import {useGetEstimateIncomeQuery} from '@/app/store/reducers/calculations/calculations.api';
import {useMediaQuery} from 'react-responsive';
import {useState} from 'react';

const ProductIncomeCalculator: React.FC<
  ProductIncomeCalculatorProps
> = props => {
  const lessLG = useMediaQuery({query: `(max-width: ${breakpoints.lg}px)`});
  const [years, setYears] = useState<number>(3);

  const {data: income} = useGetEstimateIncomeQuery(
    {
      euCitizen: false,
      annualAverage: props.data?.annualIncome?.average ?? -1,
      conditionType: props.data?.data?.conditionType ?? -1,
      occupancyRate: props.data?.annualIncome?.occupancyRate ?? -1,
      purchasePrice: props.data?.data?.price ?? -1,
      overPeriod: years,
    },
    {
      skip: !props.data,
    },
  );

  if (lessLG)
    return (
      <TouchProductIncomeCalculator
        {...props}
        income={income}
        years={years}
        setYears={setYears}
      />
    );

  return (
    <DesktopProductIncomeCalculator
      {...props}
      income={income}
      years={years}
      setYears={setYears}
    />
  );
};

export default ProductIncomeCalculator;
