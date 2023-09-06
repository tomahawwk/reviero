import {setModalPayload} from '@/app/store/actions/modal';
import {BodyScrollOptions, disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';
import {FC, useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import {IModal} from './types';
import ModalCenterView from './views/center';
import ModalLeftView from './views/left';
import ModalSwipeableView from './views/swipeable/index';

const Modal: FC<IModal> = ({children, open, view, name, className, heightFit}) => {
  const dispatch = useDispatch();
  const [renderModal, setRenderModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const scrollableContent = useRef<HTMLDivElement>(null);

  const options: BodyScrollOptions = {
    reserveScrollBarGap: true,
  };

  const onCloseHandler = () => {
    dispatch(setModalPayload(name, false));
  };

  useEffect(() => {
    if (open) {
      setRenderModal(true);
      setTimeout(() => {
        setShowModal(true);
        if (scrollableContent.current){
          disableBodyScroll(scrollableContent.current, options);
        }
          
      }, 50);
    } else {
      setShowModal(false);
      setTimeout(() => {
        setRenderModal(false);
        if (scrollableContent.current)
          enableBodyScroll(scrollableContent.current);
      }, 400);
    }
  }, [open]);

  if (!renderModal) return null;

  return (
    <div
      className={`fixed top-0 left-0 z-30 h-screen w-screen ${
        className ? className : ''
      }`}>
      <div
        className={`absolute left-0 top-0 h-full w-full bg-overlay
      transition-opacity duration-500 ${!showModal && 'opacity-0'}`}
        onClick={onCloseHandler}
      />
      {view === 'left' ? (
        <div ref={scrollableContent}>
          <ModalLeftView showModal={showModal}>{children}</ModalLeftView>
        </div>
      ) : view === 'swipeable' ? (
        <div ref={scrollableContent}>
          <ModalSwipeableView showModal={showModal} swipeEvent={onCloseHandler} heightFit={heightFit}>
            {children}
          </ModalSwipeableView>
        </div>
      ) : (
        <div ref={scrollableContent}>
          <ModalCenterView showModal={showModal}>{children}</ModalCenterView>
        </div>
      )}
    </div>
  );
};

export default Modal;
