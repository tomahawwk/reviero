import {FC} from 'react';
import {IApartmentItem, IAvailableApartments} from './types';
import ApartmentItem from './ApartmentItem';

const AvailableApartments: FC<IAvailableApartments> = ({items}) => {
  const typeOfApartments: number[] = [];
  const apartmentItems: IApartmentItem[] = [];

  items.forEach(el => {
    typeOfApartments.push(Number(el.data?.bedrooms));
  });

  Array.from(new Set(typeOfApartments)).forEach(el => {
    apartmentItems.push({
      type: el,
      list: [],
    });
  });

  items.forEach(el => {
    apartmentItems.forEach(apartmentsPart => {
      if (el.data?.bedrooms === apartmentsPart.type) apartmentsPart.list.push(el);
    });
  });

  return (
    <div>
      {apartmentItems?.map(item => {
        return <ApartmentItem key={item.type} {...item} />
      })}
    </div>
  );
};

export default AvailableApartments;
