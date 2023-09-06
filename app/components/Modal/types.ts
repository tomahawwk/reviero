import {ModalType} from '@/app/store/reducers/modal/types';

export interface IModal {
  open?: boolean;
  children: React.ReactNode;
  view: string;
  name: ModalType;
  className?: string;
  heightFit?: boolean;
}

export interface IModalView {
  showModal: boolean;
  children: React.ReactNode;
  heightFit?: boolean;
  swipeEvent?(): void;
}