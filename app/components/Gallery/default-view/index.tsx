import ImageGallery from 'react-image-gallery';
import {IGalleryItemFormat} from '../types';
import {FC, useRef} from 'react';
import { useMediaQuery } from 'react-responsive';
import breakpoints from '@/breakpoints';


interface IDefaultView {
  items: IGalleryItemFormat[];
}

const DefaultView: FC<IDefaultView> = ({items}) => {
  const imageGalleryRef = useRef<any>(null);
  const moreLG = useMediaQuery({query: `(min-width: ${breakpoints.lg}px)`});
  
  const onClickHandler = () => {
    !moreLG && imageGalleryRef.current && imageGalleryRef.current.toggleFullScreen();
  };

  return (
    <ImageGallery
      showIndex
      infinite={false}
      lazyLoad={true}
      showPlayButton={false}
      items={items}
      slideDuration={moreLG ? 0 : 450}
      ref={imageGalleryRef}
      useBrowserFullscreen={moreLG}
      onClick={onClickHandler}
    />
  );
};

export default DefaultView;
