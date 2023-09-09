import {setModalPayload} from '@/app/store/actions/modal';
import {getModalSelector} from '@/app/store/reducers/modal/modal';
import breakpoints from '@/breakpoints';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import Link from 'next/link';
import {useMediaQuery} from 'react-responsive';
import Modal from '../Modal';
import ContactPopupView from './ContactPopupView';

const ChatPopup = () => {
  const lessLG = useMediaQuery({query: `(max-width: ${breakpoints.lg}px)`});
  const {chat} = useAppSelector(getModalSelector);
  const dispatch = useAppDispatch();

  const onClose = () => {
    dispatch(setModalPayload('chat', false));
  };

  return (
    <Modal
      open={chat.open}
      className="z-50"
      view={lessLG ? 'swipeable' : 'center'}
      heightFit
      name="chat">
      <ContactPopupView title="Let's Chat" onClose={onClose} heightFit>
        <div className="flex flex-col gap-sm w-full max-lg:pb-md">
          <div className="flex gap-sm">
            <Link
              href="#"
              className="rounded-md bg-white h-[72px] shadow-card flex justify-center items-center
              hover:shadow-card-hover duration-300 w-full">
              <img
                src="/icons/contact-socials/whats-app.svg"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="#"
              className="rounded-md bg-white h-[72px] shadow-card flex justify-center items-center
              hover:shadow-card-hover duration-300 w-full">
              <img
                src="/icons/contact-socials/telegram.svg"
                width={24}
                height={24}
              />
            </Link>
          </div>
          <Link
            href="#"
            className="w-full flex rounded-sm justify-center border border-grey-400
          leading-none items-center gap-xs text-[15px] font-medium p-sm">
            <img src="/icons/email.svg" width={20} height={20} />
            <span>Email</span>
          </Link>
        </div>
      </ContactPopupView>
    </Modal>
  );
};

export default ChatPopup;
