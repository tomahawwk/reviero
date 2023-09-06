import LazyImage from '@/app/components/ui/LazyImage';
import {FC, useEffect, useState} from 'react';
import ApartmentView from './apartment-view';
import DefaultView from './default-view';
import {IGallery, IGalleryItemFormat} from './types';
import './custom-styles.css';
import breakpoints from '@/breakpoints';
import { useMediaQuery } from 'react-responsive';

const Gallery: FC<IGallery> = ({items, apartmentView}) => {
  const [formatItems, setFormatItems] = useState<any>([]);
  const moreLG = useMediaQuery({query: `(min-width: ${breakpoints.lg}px)`});

  useEffect(() => {
    items.forEach((url) => {
      setFormatItems((prevState: IGalleryItemFormat[]) => [
        {
          original: url,
          thumbnail: url,
          fullscreen: url,
        },
        ...prevState,
      ]);
    });
  }, [items]);

  return (
    <div className={`gallery${apartmentView ? ' gallery--apartment' : ''}`}>
      {formatItems.length > 1 ? (
        apartmentView && moreLG ? (
          <ApartmentView items={formatItems} />
        ) : (
          <DefaultView items={formatItems} />
        )
      ) : (
        <div className="max-sm:mx-sm max-md:mx-md max-lg:mx-lg h-full bg-grey-400 rounded-lg overflow-hidden">
          <LazyImage
            src={formatItems[0]?.original}
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
