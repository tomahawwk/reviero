import {ICardGallery} from '@/app/@types/Card/ICardGallery';
import breakpoints from '@/breakpoints';
import {FC} from 'react';
import {useMediaQuery} from 'react-responsive';
import GalleryDesktop from './desktop';
import GalleryTouch from './touch';

const Gallery: FC<ICardGallery> = ({items}) => {
  const lessLG = useMediaQuery({query: `(max-width: ${breakpoints.lg}px)`});

  return (
    <div className="absolute left-0 top-0 h-full w-full">
      {lessLG ? (
        <GalleryTouch items={items} />
      ) : (
        <GalleryDesktop items={items} />
      )}
    </div>
  );
};

export default Gallery;
