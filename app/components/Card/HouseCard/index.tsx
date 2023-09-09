import {Property} from '@/app/@types/protobuf-types';
import MoveInDay from '@/app/components/MoveInDay';
import ProductInfo from '@/app/components/ProductInfo';
import Tags from '@/app/components/Tags';
import {useGetLocationsQuery} from '@/app/store/reducers/services/services.api';
import {getCity, getCountry} from '@/utils/getLocationProps';
import {map, max, min} from 'lodash';
import Link from 'next/link';
import {FC} from 'react';
import Gallery from '../Gallery';

const HouseCard: FC<Property> = ({
  content,
  address,
  data,
  children,
  id,
  snippet,
}) => {
  const {data: locationsData} = useGetLocationsQuery({});
  const annualPercent = {
    min: Number(min(map(children, 'annualIncome.percent'))),
    max: Number(max(map(children, 'annualIncome.percent'))),
  };

  return (
    <div className="flex flex-col gap-[15px]">
      <Link
        href={`/marketplace/${id}`}
        className="relative h-[268px] min-h-[240px] overflow-hidden rounded-lg bg-grey-400 md:h-[320px] md:min-h-[320px]">
        {content?.images && <Gallery items={content?.images} />}
        <Tags isCard />
      </Link>
      <div className="flex flex-col gap-[8px]">
        <ProductInfo
          isCard
          annualPercent={annualPercent}
          minPrice={Number(min(map(children, 'data.price')))}
          maxPrice={Number(max(map(children, 'data.price')))}
        />
        {snippet?.complex?.endOfConstruction && (
          <p className="text-p text-md leading-none">
            Move in day:{' '}
            <MoveInDay
              month={Number(snippet?.complex?.endOfConstruction?.month)}
              year={Number(snippet?.complex?.endOfConstruction?.year)}
            />
          </p>
        )}
        {locationsData && (
          <div className="flex gap-[5px] max-w-full overflow-hidden whitespace-nowrap">
            <span className="text-md text-p">
              {getCity(locationsData, address?.cityId).name},{' '}
              {getCountry(locationsData, address?.countryId).name}
            </span>
            <span
              className="flex items-center gap-[5px] text-md text-p
            before:mt-[-2px] before:h-[3px] before:w-[3px] before:rounded-full before:bg-p before:content-['']">
              {content?.name}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default HouseCard;
