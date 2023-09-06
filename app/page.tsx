'use client';
import Hero from '@/app/components/Hero';
import MonthlyRevenue from '@/app/components/MonthlyRevenue';
import HowItWorks from '@/app/components/HowItWorks';
import InvestmentAdvantages from '@/app/components/InvestmentAdvantages';
import {NextPage} from 'next';
import BaseLayout from '@/app/layouts/BaseLayout';
import Listings from '@/app/components/Listings';
import IncomeCalculator from '@/app/components/IncomeCalculator';
import RevieroAI from '@/app/components/RevieroAI';
import Invest from '@/app/components/Invest';

const MainPage: NextPage = () => {
  return (
    <BaseLayout>
      <div className="lg:wrapper pb-sm lg:py-lg w-full">
        <main className="grid lg:gap-[120px]">
          <Hero />
          <Listings />
          <MonthlyRevenue />
          <IncomeCalculator />
          <InvestmentAdvantages />
          <HowItWorks />
          <RevieroAI />
          <Invest />
        </main>
      </div>
    </BaseLayout>
  );
};

export default MainPage;
