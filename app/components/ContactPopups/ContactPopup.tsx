import {setModalPayload} from '@/app/store/actions/modal';
import {getModalSelector} from '@/app/store/reducers/modal/modal';
import breakpoints from '@/breakpoints';
import {useDispatch, useSelector} from 'react-redux';
import {useMediaQuery} from 'react-responsive';
import Modal from '../Modal';
import LazyImage from '../ui/LazyImage';
import ContactPopupView from './ContactPopupView';

const ContactPopup = () => {
  const lessLG = useMediaQuery({query: `(max-width: ${breakpoints.lg}px)`});
  const moreXS = useMediaQuery({query: `(min-width: ${breakpoints.xs}px)`});

  const {contact} = useSelector(getModalSelector);
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(setModalPayload('contact', false));
  };

  const onSwitchContactModal = (callback: any) => {
    onClose();
    setTimeout(() => {
      callback();
    }, 400);
  };

  return (
    <Modal
      open={contact.open}
      className="z-50"
      view={lessLG ? 'swipeable' : 'center'}
      name="contact">
      <ContactPopupView title="Contact" onClose={onClose}>
        <div className="flex flex-col gap-xs w-full max-lg:pb-md">
          <div
            className="w-full shadow-card rounded-md bg-white px-sm pt-sm pb-md
            flex gap-md justify-between">
            <div className="flex flex-col gap-[10px] max-w-[300px]">
              <span className="font-medium leading-none text-lg">
                Let's Chat
              </span>
              <p className="text-md text-p">
                Chat with our real estate expert with messengers or email
              </p>
              <button
                className="btn-primary text-lg p-[10px_25px_8px] w-fit rounded-xs"
                onClick={() => {
                  onSwitchContactModal(() =>
                    dispatch(setModalPayload('chat', true)),
                  );
                }}>
                Let's Chat
              </button>
            </div>
            {moreXS && (
              <div className="w-[100px] h-[120px] min-w-[100px] rounded-sm bg-grey-500 overflow-hidden">
                <LazyImage src="/images/contact-face.jpg" />
              </div>
            )}
          </div>

          <div
            className="w-full shadow-card rounded-md bg-white px-sm pt-sm pb-md
            flex gap-md justify-between">
            <div className="flex flex-col gap-[10px] max-w-[300px]">
              <span className="font-medium leading-none text-lg">
                Let's Talk
              </span>
              <p className="text-md text-p">
                Schedule a WhatsApp, Google Meet, Zoom or phone call
              </p>
              <button
                className="btn-primary text-lg p-[10px_25px_8px] w-fit rounded-xs"
                onClick={() => {
                  onSwitchContactModal(() =>
                    dispatch(setModalPayload('talk', true)),
                  );
                }}>
                Let's Talk
              </button>
            </div>
            {moreXS && (
              <div className="w-[100px] min-w-[100px] h-[120px] rounded-sm bg-grey-500 overflow-hidden flex items-center justify-center">
                <img src="/icons/contact-icon-1.svg" width={36} height={35} />
              </div>
            )}
          </div>

          <div
            className="w-full shadow-card rounded-md bg-white px-sm pt-sm pb-md
                flex gap-md justify-between">
            <div className="flex flex-col gap-[10px] max-w-[300px]">
              <span className="font-medium leading-none text-lg">
                Book a Online Tour
              </span>
              <p className="text-md text-p">
                Schedule an online tour via WhatsApp or Telegram.
              </p>
              <button
                className="btn-primary text-lg p-[10px_20px_8px] w-fit rounded-xs whitespace-nowrap"
                onClick={() => {
                  onSwitchContactModal(() =>
                    dispatch(setModalPayload('tour', true)),
                  );
                }}>
                Book a Online Tour
              </button>
            </div>
            {moreXS && (
              <div className="w-[100px] min-w-[100px] h-[120px] rounded-sm bg-grey-500 overflow-hidden flex items-center justify-center">
                <img src="/icons/contact-icon-2.svg" width={36} height={36} />
              </div>
            )}
          </div>
        </div>
      </ContactPopupView>
    </Modal>
  );
};

export default ContactPopup;
