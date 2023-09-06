import {FC} from 'react';
import {IHomeProperties} from './types';

const HomeProperties: FC<IHomeProperties> = ({items, isList}) => {

  return (
    <div
      className={`grid grid-cols-1 ${
        !isList && 'md:grid-cols-2 lg:grid-cols-3'
      } gap-[20px]`}>
      {items.map(item => {
        return (
          <div className="flex items-end gap-[12px]" key={item.id}>
            <img src={item.icon} alt={item.name} width={24} height={24} />
            <span className="leading-4 font-medium">{item.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default HomeProperties;
