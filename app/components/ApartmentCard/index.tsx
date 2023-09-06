import ApartmentProperties from '@/app/components/ApartmentProperties';
import ProductInfo from '@/app/components/ProductInfo';
import Tags from '@/app/components/Tags';
import LazyImage from '@/app/components/ui/LazyImage';
import breakpoints from '@/breakpoints';
import {ArrowIcon} from '@/icons/Arrow';
import Link from 'next/link';
import {FC} from 'react';
import {useMediaQuery} from 'react-responsive';
import {IApartmentCard} from './types';

const ApartmentCard: FC<IApartmentCard> = ({item, link}) => {
  const lessLG = useMediaQuery({query: `(max-width: ${breakpoints.lg}px)`});
  const items = [
    {
      id: 1,
      icon: '/icons/bedroom.svg',
      text: item.data?.bedrooms?.toString(),
    },
    {
      id: 2,
      icon: '/icons/bathroom.svg',
      text: item.data?.bathrooms?.toString(),
    },
    {
      id: 3,
      icon: '/icons/meters.svg',
      text: '56m²',
    },
    {
      id: 4,
      text: 'Floor: 3/4',
    },
  ];

  return (
    <Link
      href={link}
      className="grid grid-cols-[1fr_auto] md:grid-cols-[98px_1fr_auto] duration-500
     gap-md rounded-md bg-white p-sm shadow-card hover:shadow-card-hover">
      {!lessLG &&
        (item.content?.images.length ? (
          <LazyImage
            src={item.content?.images[0]}
            className="h-[98px] w-full rounded-sm object-cover"
          />
        ) : (
          <div className="h-[98px] w-full rounded-sm object-cover bg-grey-400" />
        ))}
      <div className="w-full">
        <div className="flex w-full pb-xs">
          <ProductInfo
            isCard
            showPercent
            minPrice={Number(item.data?.price)}
            annualPercent={{
              min: Number(item.annualIncome?.percent),
            }}
          />
        </div>
        <div className="pt-xs border-t-[1px] border-grey-400">
          <ApartmentProperties items={items} />
        </div>
        <div className="pt-xs border-t-[1px] mt-xs border-grey-400">
          <Tags />
        </div>
      </div>
      <ArrowIcon
        width={20}
        height={12}
        className="text-primary-main rotate-[-90deg] self-center"
      />
    </Link>
  );
};

export default ApartmentCard;
