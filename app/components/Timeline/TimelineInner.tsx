import TimelineItem from '@/app/components/TimelineItem';
import {CrossIcon} from '@/icons/Cross';
import {FC, useState} from 'react';
import {ITimeline} from './types';

const TimelineInner: FC<ITimeline> = ({items, onClose}) => {
  const [currentTab, setCurrentTab] = useState(items[0]);
  return (
    <div className="w-full lg:w-[680px] rounded-md bg-white shadow-swipeModal lg:shadow-xl h-[90vh] overflow-hidden">
      <div
        className="w-full px-sm lg:px-md py-sm border-b border-grey-600 sticky top-0 bg-white z-10 h-[120px]
      flex flex-col justify-between gap-sm">
        <div className="relative w-full pt-[7px]">
          <span className="w-full text-center font-bold leading-none block max-lg:text-[18px]">
            Purchase Timeline
          </span>
          <CrossIcon
            onClick={onClose}
            width={12}
            height={12}
            className="absolute top-0 bottom-0 m-auto right-0 cursor-pointer"
          />
        </div>
        <div className="grid grid-cols-2 gap-xs">
          {items.map(item => {
            return (
              <button
                className={`w-full border rounded-sm leading-none p-xs ${
                  item.title === currentTab?.title
                    ? 'border-primary-main'
                    : 'border-grey-600'
                }`}
                key={item.title}
                onClick={() => setCurrentTab(item)}>
                {item.title}
              </button>
            );
          })}
        </div>
      </div>
      <div className="px-sm lg:px-md overflow-y-auto max-h-full lg:custom-scrollbar no-swiping">
        <div className="pb-[170px] lg:pb-[120px]">
          {currentTab?.list.length
            ? currentTab.list.map((item, index) => {
                return (
                  <TimelineItem key={item.id} {...item} index={index + 1} />
                );
              })
            : 'No items'}
        </div>
      </div>
    </div>
  );
};

export default TimelineInner;
