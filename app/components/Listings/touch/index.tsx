'use client';
import HouseCard from '@/app/components/Card/HouseCard';
import PropertyCard from '@/app/components/Card/PropertyCard';
import SkeletonCard from '@/app/components/Card/Skeleton';
import {FC} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {IListing} from '../types';
import {Pagination} from 'swiper';

const ListingsTouch: FC<IListing> = ({items, loading}) => {
  return (
    <>
      {!loading ? (
        <div className="px-sm">
          <SkeletonCard />
        </div>
      ) : (
        <>
        <div className="pagination-listings" />
        <Swiper
            className="w-full overflow-visible"
            spaceBetween={0}
            modules={[Pagination]}
            pagination={{clickable: true, el: '.pagination-listings'}}
            slidesPerView={1}>
            {items?.map((item: any) =>
              item.schema === 'house' ? (
                <SwiperSlide className="px-sm" key={item.id}>
                  <HouseCard {...item} />
                </SwiperSlide>
              ) : (
                <SwiperSlide className="px-sm" key={item.id}>
                  <PropertyCard {...item} />
                </SwiperSlide>
              ),
            )}
          </Swiper>
          </>
      )}
    </>
  );
};

export default ListingsTouch;
