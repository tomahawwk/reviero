import {FC} from 'react';
import {ILazyImage} from './types';
import {LazyLoadImage} from 'react-lazy-load-image-component';

const LazyImage: FC<ILazyImage> = ({
  className,
  src,
  width,
  height,
  alt,
  minWidth,
}) => {
  return (
    <LazyLoadImage
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
