import {
  OPEN_MODAL,
  SET_MODAL_PAYLOAD,
} from '@/app/store/definitions/action-types';
import {RootState} from '@/app/store/store';
import {ModalState} from './types';

export const initialState: ModalState = {
  filters: {
    open: false,
  },
  menu: {
    open: false,
  },
  timeline: {
    open: false,
  },
  contact: {
    open: false,
  },
  talk: {
    open: false,
  },
  chat: {
    open: false,
  },
  tour: {
    open: false,
  },
};

export const modal = (state: any = initialState, action: any) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        [action.modal]: {...state[action.modal], open: action.open},
      };
    case SET_MODAL_PAYLOAD:
      return {
        ...state,
        [action.modal]: {
          ...state[action.modal],
          payload: action.payload,
          open: action.open,
        },
      };
    default:
      return state;
  }
};

export const getModalSelector = (state: RootState) => state.modal;
