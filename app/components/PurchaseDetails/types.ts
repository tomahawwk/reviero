import type {Property} from '@/app/@types/protobuf-types';

export type IPurchaseItem = {
  title: string;
  children: React.ReactNode;
  summary: React.ReactNode;
};

export type IPurchasePacket = {
  name: string;
  cost: number;
};

export type PurchaseDetailsProps = React.ComponentProps<'div'> & {
  data?: Property | undefined;
};
