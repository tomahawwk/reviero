'use client';
import FAQItem from '@/app/components/FAQItem';
import Title from '@/app/components/ui/Title';
import BaseLayout from '@/app/layouts/BaseLayout';
import {NextPage} from 'next';
import {useState} from 'react';
import faqItems from './data';

const FAQ: NextPage = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [currentItem, setCurrentItem] = useState(faqItems[0]);

  const setActive = (index: number) => {
    faqItems && setCurrentItem(faqItems[index]);
    setActiveTab(index);
  };

  return (
    <BaseLayout>
      <div className="md:wrapper py-sm md:py-lg w-full">
        <div className="max-sm:pl-sm max-md:pl-md">
          <Title>FAQ</Title>
        </div>
        <div className="grid lg:grid-cols-[240px_1fr] w-full mt-md md:mt-lg gap-sm md:gap-lg">
          <div
            className="flex gap-xs lg:gap-0 lg:flex-col overflow-x-scroll
            md:overflow-x-auto max-md:px-sm">
            {faqItems.map(({title}, index) => {
              return (
                <button
                  key={title}
                  onClick={() => setActive(index)}
                  className={`p-xs md:p-sm rounded-sm text-left whitespace-nowrap font-medium ${
                    index == activeTab && 'bg-grey-500'
                  }`}>
                  {title}
                </button>
              );
            })}
          </div>
          <div className="max-md:pl-sm">
            {currentItem?.list.map((item, index) => {
              return <FAQItem key={item.id} {...item} index={index} />;
            })}
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default FAQ;
