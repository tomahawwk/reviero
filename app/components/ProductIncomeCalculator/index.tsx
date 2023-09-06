'use client';
import breakpoints from '@/breakpoints';
import {FC, useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import DesktopProductIncomeCalculator from './desktop';
import TouchProductIncomeCalculator from './touch';

const ProductIncomeCalculator: FC = () => {
  const lessLG = useMediaQuery({query: `(max-width: ${breakpoints.lg}px)`});
  const [years, setYears] = useState<number>(3);

  if (lessLG)
    return <TouchProductIncomeCalculator years={years} setYears={setYears} />;

  return <DesktopProductIncomeCalculator years={years} setYears={setYears} />;
};

export default ProductIncomeCalculator;
