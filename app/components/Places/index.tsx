import {FC} from 'react';
import {IPlaces} from './types';
import LazyImage from '@/app/components/ui/LazyImage';

const Places: FC<IPlaces> = ({items}) => {
  return (
    <div className="gap-md md:gap-[32px] grid">
      {items?.map(item => {
        return (
          <div
            className="flex flex-col lg:flex-row lg:justify-between gap-sm md:gap-lg md:border-t-[1px] md:pt-[32px] border-grey-400"
            key={item.id}>
            <div className="flex flex-col gap-[5px] md:gap-[10px]">
              <b className="text-lg md:text-title text-black font-medium">
                {item?.snippet?.areaPost?.title}
              </b>
              {item?.snippet?.areaPost?.text && (
                <p className="text-md md:text-lg text-grey-800">
                  {item.snippet.areaPost.text}
                </p>
              )}
            </div>
            <div className="w-full lg:w-[468px] h-[210px] lg:min-w-[468px] md:h-[300px]">
              <LazyImage
                className="object-cover w-full h-full rounded-md"
                src={item?.snippet?.areaPost?.picture}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Places;
