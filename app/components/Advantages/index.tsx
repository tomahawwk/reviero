import Image from 'next/image';
import {FC} from 'react';
import {Pagination} from 'swiper';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';
import {IAdvantage} from './types';

const items: IAdvantage[] = [
  {
    title: 'Advantage 1',
    description:
      'Investing with Reviero is simple and stress-free. All processes from purchase to getting income digitalized.',
    icon: '/icons/advantage-1.svg',
  },
  {
    title: 'Advantage 2',
    description: 'Investing with Reviero is simple and stress-free.',
    icon: '/icons/advantage-1.svg',
  },
  {
    title: 'Advantage 3',
    description:
      'Investing with Reviero is simple and stress-free. All processes from.',
    icon: '/icons/advantage-1.svg',
  },
  {
    title: 'Advantage 4',
    description: 'All processes from purchase to getting income digitalized.',
    icon: '/icons/advantage-1.svg',
  },
];

const Advantages: FC = () => {
  return (
    <Swiper
      className="pagination-advantages w-full"
      modules={[Pagination]}
      spaceBetween={24}
      pagination={{clickable: true}}
      slidesPerView={1}>
      {items.map(item => {
        return (
          <SwiperSlide key={item.title}>
            <div
              className="flex flex-col gap-[8px] rounded-md
                border border-grey-400 p-md h-full">
              <Image src={item.icon} alt={item.title} width={40} height={40} />
              <b className="text-[18px] font-medium">{item.title}</b>
              <p className="text-p leading-tight">{item.description}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Advantages;
