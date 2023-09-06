import {IModalView} from '@/app/components/Modal/types';
import {FC, useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperClass from 'swiper/types/swiper-class';

const ModalSwipeableView: FC<IModalView> = ({
  children,
  showModal,
  heightFit,
  swipeEvent,
}) => {
  const [swiperModal, setSwiperModal] = useState<SwiperClass>();

  const onOpen = () => {
    if (swiperModal) {
      swiperModal.slideNext();
    }
  };

  const onClose = () => {
    if (swiperModal) {
      swiperModal.slidePrev();
    }
  };

  const onSwipe = () => {
    if (swiperModal && swiperModal.activeIndex === 0) {
      swipeEvent && swipeEvent();
    }
  };

  useEffect(() => {
    if (showModal) onOpen();
    else onClose();
  }, [showModal]);

  return (
    <Swiper
      className="absolute bottom-0 left-0 h-screen pointer-events-none"
      slidesPerView={1}
      noSwiping
      noSwipingClass='no-swiping'
      onSwiper={setSwiperModal}
      direction={'vertical'}
      resistanceRatio={0}
      slideToClickedSlide={true}
      onSlideChange={onSwipe}>
      <SwiperSlide />
      <SwiperSlide className="pointer-events-none">
        <div className={`absolute left-0 bottom-0 w-full
          pointer-events-auto ${heightFit ? "h-fit" : "h-[calc(100%-100px)]"}`}>
          {children}
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ModalSwipeableView;
