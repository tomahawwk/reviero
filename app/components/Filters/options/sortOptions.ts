import {GetMarketplaceRequestSortBy} from '@/app/@types/protobuf-types';

//TODO: импортить типы
export const sortOptions = [
  {
    title: 'Upload date',
    subtitle: 'Latest first',
    value: GetMarketplaceRequestSortBy.MOST_RECENT,
  },
  {
    title: 'Income',
    subtitle: 'Biggest first',
    value: GetMarketplaceRequestSortBy.BIGGEST_FIRST,
  },
  {
    title: 'Price',
    subtitle: 'Cheapest first',
    value: GetMarketplaceRequestSortBy.CHEAPEST_FIRST,
  },
];
