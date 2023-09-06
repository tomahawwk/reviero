export type ModalType = 'menu' | 'filters' | 'timeline' | 'contact' | 'chat' | 'talk' | 'tour';

export interface Modal {
  open?: boolean;
  payload?: any;
}

export type ModalState = {
  [k in ModalType]: Modal;
};