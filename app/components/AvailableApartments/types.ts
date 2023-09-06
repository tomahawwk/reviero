import {Property} from '@/app/@types/protobuf-types';

export interface IAvailableApartments {
  items: Property[];
}

export type IApartmentItem = {
  type: number;
  list: Property[];
};
