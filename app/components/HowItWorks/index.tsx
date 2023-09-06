'use client';
import breakpoints from '@/breakpoints';
import {FC} from 'react';
import {useMediaQuery} from 'react-responsive';
import HowItemDesktop from './item/desktop';
import HowItemTouch from './item/touch';

const items = [
  {
    icon: '/icons/how-it-works-1.svg',
    title: 'Analise',
    description: `Explore properties, analyze financials, compare key metrics (rental yields, appreciation, growth), confidently choose the best investment for your goals.`,
  },
  {
    icon: '/icons/how-it-works-3.svg',
    title: 'Purchace',
    description: `At Reviero, we ensure a simple buying process with dedicated support at every step. Our team will assist you in finding the perfect property, provide legal and mortgage support, and remain available for any inquiries.`,
    button: true,
  },
  {
    icon: '/icons/how-it-works-4.svg',
    title: 'Prepare',
    description: `Reviero takes care of everything for you, making the rental process effortless. Our comprehensive services cover property preparation, staging, setting competitive rental rates, and handling necessary maintenance and upgrades.`,
    isDarkLine: true,
  },
  {
    icon: '/icons/how-it-works-5.svg',
    title: 'Rental start',
    description: `Reviero takes charge of the entire rental process, from advertising your property on multiple platforms to managing all aspects of the rental journey, including cleaning services and pricing optimization. `,
    isDarkLine: true,
  },
  {
    icon: '/icons/how-it-works-6.svg',
    title: 'Earn and Enjoy',
    description: `Get steady monthly rental income and the flexibility to reserve your property for personal vacations. Enjoy consistent rental revenue while having the freedom to relax in your own home-away-from-home. `,
    isDarkLine: true,
  },
];

const HowItWorks: FC = () => {
  const lessLG = useMediaQuery({query: `(max-width: ${breakpoints.lg}px)`});

  return (
    <section className="lg:rounded-lg lg:bg-grey-500 relative max-lg:px-sm">
      <div className="max-lg:text-[36px] t-h2 lg:absolute left-lg top-[80px] max-lg:mb-[35px]">
        How it Works
      </div>
      <div className="grid lg:grid-cols-5">
        {items.map((item, index) => {
          if (lessLG) {
            return (
              <HowItemTouch
                key={item.icon}
                lastChild={index === items.length - 1}
                firstChild={index === 0}
                {...item}
              />
            );
          } else {
            return (
              <HowItemDesktop
                key={item.icon}
                {...item}
                lastChild={index === items.length - 1}
              />
            );
          }
        })}
      </div>
    </section>
  );
};

export default HowItWorks;
