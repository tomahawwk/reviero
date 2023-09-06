import {FC} from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {ILazyImage} from './types';

const LazyImage: FC<ILazyImage> = ({className, src, width, height, alt, minWidth}) => {
  return (
    <LazyLoadImage
      effect="blur"
      delayTime={600}
      delayMethod="debounce"
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{minWidth: minWidth}}
    />
  );
};

export default LazyImage;
