import {Property} from '@/app/@types/protobuf-types';
import ApartmentProperties from '@/app/components/ApartmentProperties';
import ProductInfo from '@/app/components/ProductInfo';
import {useGetLocationsQuery} from '@/app/store/reducers/services/services.api';
import {getCity, getCountry} from '@/utils/getLocationProps';
import Link from 'next/link';
import {FC} from 'react';
import Gallery from '../Gallery';

const HouseCard: FC<Property> = ({
  content,
  address,
  data,
  annualIncome,
  id,
  parent,
}) => {
  const {data: locationsData} = useGetLocationsQuery({});
  const annualPercent = {
    min: Number(annualIncome?.percent),
  };

  const properties = [
    {
      icon: '/icons/bedroom.svg',
      text: data?.bedrooms?.toString(),
      id: 1,
    },
    {
      icon: '/icons/bathroom.svg',
      text: data?.bathrooms?.toString(),
      id: 2,
    },
    {
      icon: '/icons/meters.svg',
      text: '56m²',
      id: 3,
    },
  ];

  return (
    <div className="flex flex-col gap-[15px]">
      <Link
        href={`/marketplace/house/${id}`}
        className="relative h-[268px] min-h-[240px] overflow-hidden rounded-lg bg-grey-400 md:h-[320px] md:min-h-[320px]">
        {content?.images && <Gallery items={content?.images} />}
        <ul className="absolute left-[16px] top-[16px] z-10 flex flex-wrap gap-[8px]">
          <li className="rounded-[8px] bg-primary-main px-[12px] pb-[3px] pt-[4px] text-sm text-white">
            4 investing variants
          </li>
        </ul>
      </Link>
      <div className="flex flex-col gap-[10px]">
        <ProductInfo
          isCard
          annualPercent={annualPercent}
          minPrice={Number(data?.price)}
        />
        <ApartmentProperties items={properties} />
        {locationsData && (
          <div className="flex gap-[5px] max-w-full overflow-hidden whitespace-nowrap">
            <span className="text-md text-p">
              {getCity(locationsData, address?.cityId).name},{' '}
              {getCountry(locationsData, address?.countryId).name}
            </span>
            <span
              className="flex items-center gap-[5px] text-md text-p
            before:mt-[-2px] before:h-[3px] before:w-[3px] before:rounded-full before:bg-p before:content-['']">
              {parent?.content?.name}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default HouseCard;
