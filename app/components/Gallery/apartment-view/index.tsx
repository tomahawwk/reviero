import LazyImage from '@/app/components/ui/LazyImage';
import {FC, useEffect, useRef, useState} from 'react';
import ImageGallery from 'react-image-gallery';
import {IGalleryApartment} from '../types';
import breakpoints from '@/breakpoints';
import { useMediaQuery } from 'react-responsive';

const ApartmentView: FC<IGalleryApartment> = ({items}) => {
  const [showGallery, setShowGallery] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const imageGalleryRef = useRef<any>(null);
  const moreLG = useMediaQuery({query: `(min-width: ${breakpoints.lg}px)`});

  useEffect(() => {
    showGallery && onFullscreenTrigger();
  }, [showGallery]);

  const onFullscreenTrigger = () => {
    if(imageGalleryRef.current) {
      imageGalleryRef.current.toggleFullScreen();
      imageGalleryRef.current.slideToIndex(currentIndex);
    }
  };

  const onFullscreenChange = () => {
    if (imageGalleryRef.current) {
      setTimeout(() => {
        !imageGalleryRef.current.state.isFullscreen && setShowGallery(false);
      }, 0);
    }
  };

  const openGallery = (index: number) => {
    setShowGallery(true);
    setCurrentIndex(index);
  };

  if(items) return (
    <>
      <div className="grid w-full grid-cols-[7fr_3fr] gap-xs h-full">
        <div
          className="border border-grey-400 bg-grey-500 rounded-md row-span-2
        h-full overflow-hidden relative cursor-pointer"
          onClick={() => openGallery(0)}>
          <LazyImage
            src={items[0]?.original}
            className="object-cover w-full h-full"
          />
          <button
            className="absolute bg-greenTransparent rounded-sm duration-300
          px-md py-xs bottom-sm left-sm z-10 text-white hover:bg-primary-dark">
            Show All Photos{' '}
            {items && <span className="opacity-60">{items.length}</span>}
          </button>
        </div>
        <div
          className="border border-grey-400 bg-grey-500 rounded-md h-full overflow-hidden cursor-pointer"
          onClick={() => openGallery(1)}>
          <LazyImage
            src={items[1]?.original}
            className="object-cover w-full h-full"
          />
        </div>
        <div
          className="border border-grey-400 bg-grey-500 rounded-md h-full overflow-hidden cursor-pointer"
          onClick={() => openGallery(2)}>
          <LazyImage
            src={items[2]?.original}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      {showGallery && (
        <ImageGallery
          showIndex
          infinite={false}
          ref={imageGalleryRef}
          slideDuration={moreLG ? 0 : 450}
          showThumbnails={false}
          showPlayButton={false}
          items={items}
          onScreenChange={onFullscreenChange}
          onClick={onFullscreenTrigger}
        />
      )}
    </>
  )
  else return null;
};

export default ApartmentView;
