
import {FC} from 'react';
import {EffectFade, Pagination} from 'swiper';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';
import { ICardGallery } from '../../types';

const GalleryTouch: FC<ICardGallery> = ({items}) => {
  return (
    <Swiper
      className="h-full pagination-card"
      modules={[EffectFade, Pagination]}
      pagination={{clickable: true}}
      effect="fade"
      slidesPerView={1}>
      {items.slice(0, 5).map(item => {
        return (
          <SwiperSlide key={item}>
            <img
              className={`absolute left-0 top-0 h-full w-full object-cover transition duration-300`}
              src={item}
              key={item}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default GalleryTouch;
