import {FC} from 'react';
import {IApartmentProperties} from './types';

const ApartmentProperties: FC<IApartmentProperties> = ({isLarge, items}) => {
  return (
    <div className="flex flex-wrap gap-[8px]">
      {items?.map(({icon, text, id}) => {
        return (
          <div
            key={id}
            className={`flex items-center rounded-[8px] ${
              isLarge
                ? 'bg-grey-400 px-[14px] h-[40px] gap-[10px]'
                : 'bg-grey-500 px-[8px] h-[28px] gap-[4px]'
            }`}>
            {icon && (
              <img
                src={icon}
                alt={text}
                width={isLarge ? 24 : 14}
                height={isLarge ? 24 : 14}
              />
            )}
            <span
              className={`${
                isLarge ? 'text-lg' : 'text-md'
              } font-medium leading-4`}>
              {text}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ApartmentProperties;
