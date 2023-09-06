import breakpoints from '@/breakpoints';
import {ArrowIcon} from '@/icons/Arrow';
import {FC, useState} from 'react';
import {Collapse} from 'react-collapse';
import {useMediaQuery} from 'react-responsive';
import {ITimelineItem} from '../Timeline/types';

const TimelineItem: FC<ITimelineItem> = ({
  title,
  description,
  during,
  index,
}) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const moreLG = useMediaQuery({query: `(min-width: ${breakpoints.lg}px)`});

  return (
    <div className="w-full border-grey-400 border-b-[1px] last:border-none py-[16px]">
      <button
        className="flex w-full  justify-between"
        onClick={() => setIsOpened(!isOpened)}>
        <div className="flex items-center gap-[10px]">
          <ArrowIcon
            width={12}
            height={8}
            className={`text-black duration-300 ${isOpened && 'rotate-180'}`}
          />
          <span className="text-lg lg:text-[18px] max-lg:font-medium">
            {index}. {title}
          </span>
        </div>
        {moreLG && <span className="text-p text-[18px]">{during}</span>}
      </button>
      {description && (
        <Collapse isOpened={isOpened}>
          <div
            className="text-lg lg:text-[18px] py-xs formatted-html pl-[21px]"
            dangerouslySetInnerHTML={{__html: description}}
          />
        </Collapse>
      )}
    </div>
  );
};

export default TimelineItem;
