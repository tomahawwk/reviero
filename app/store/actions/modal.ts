import {OPEN_MODAL, SET_MODAL_PAYLOAD} from '@/app/store/definitions/action-types';
import {ModalType} from '@/app/store/reducers/modal/types';

function openModal(modal: ModalType, open: boolean) {
  return {
    type: OPEN_MODAL,
    modal,
    open,
  };
}

function setModalPayload(modal: ModalType, open = true) {
  return {
    type: SET_MODAL_PAYLOAD,
    modal,
    open,
  };
}

export {openModal, setModalPayload};
