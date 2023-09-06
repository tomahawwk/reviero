import {ICardGallery} from '@/app/@types/Card/ICardGallery';
import LazyImage from '@/app/components/ui/LazyImage';
import {FC, useState} from 'react';

const GalleryDesktop: FC<ICardGallery> = ({items}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <>
      <div className="relative z-10 flex h-full">
        {items.slice(0, 5).map((item, index) => {
          return (
            <div
              className="h-full w-full"
              key={item}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(0)}
            />
          );
        })}
      </div>
      <div className="absolute left-0 top-0 flex h-full w-full">
        {items.slice(0, 5).map((item, index) => {
          return (
            <div key={item} className={`absolute left-0 top-0 h-full w-full transition duration-300 ${
              activeIndex === index ? 'opacity-100' : 'opacity-0'
            }`}>
              <LazyImage
                className="object-cover h-full w-full"
                src={item}
                key={item}
              />
            </div>
          );
        })}
      </div>
      {items.length > 1 && (
        <div className="absolute bottom-[30px] left-0 right-0 flex justify-center gap-[8px]">
          {items.slice(0, 5).map((item, index) => {
            return (
              <span
                className={`h-[6px] w-[6px] rounded-full bg-white transition duration-300 ${
                  activeIndex === index
                    ? 'scale-150 opacity-100'
                    : 'scale-1 opacity-50'
                }`}
                key={item}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default GalleryDesktop;
