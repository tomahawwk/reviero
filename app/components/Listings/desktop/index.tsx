'use client';

import {FC} from 'react';
import HouseCard from '@/app/components/Card/HouseCard';
import {IListing} from '../types';
import PropertyCard from '@/app/components/Card/PropertyCard';
import SkeletonCard from '@/app/components/Card/Skeleton';

const ListingsDesktop: FC<IListing> = ({items, loading}) => {
  return (
    <>
      {!loading ? (
        <>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </>
      ) : (
        items?.map((item: any) =>
          item.snippet.apartment ? (
            <PropertyCard {...item} key={item.id} />
          ) : (
            <HouseCard {...item} key={item.id} />
          ),
        )
      )}
    </>
  );
};

export default ListingsDesktop;
