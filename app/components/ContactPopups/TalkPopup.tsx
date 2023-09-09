import {setModalPayload} from '@/app/store/actions/modal';
import {getModalSelector} from '@/app/store/reducers/modal/modal';
import breakpoints from '@/breakpoints';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import Link from 'next/link';
import {useMediaQuery} from 'react-responsive';
import Modal from '../Modal';
import ContactPopupView from './ContactPopupView';

const TalkPopup = () => {
  const lessLG = useMediaQuery({query: `(max-width: ${breakpoints.lg}px)`});
  const {talk} = useAppSelector(getModalSelector);
  const dispatch = useAppDispatch();

  const onClose = () => {
    dispatch(setModalPayload('talk', false));
  };

  return (
    <Modal
      open={talk.open}
      className="z-50"
      view={lessLG ? 'swipeable' : 'center'}
      heightFit
      name="talk">
      <ContactPopupView title="Let's Talk" onClose={onClose} heightFit>
        <div className="flex flex-col gap-sm w-full max-lg:pb-md">
          <div className="flex gap-sm max-xs:grid max-xs:grid-cols-2">
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
            <Link
              href="#"
              className="rounded-md bg-white h-[72px] shadow-card flex justify-center items-center
              hover:shadow-card-hover duration-300 w-full">
              <img
                src="/icons/contact-socials/google-meet.svg"
                width={29}
                height={24}
              />
            </Link>
            <Link
              href="#"
              className="rounded-md bg-white h-[72px] shadow-card flex justify-center items-center
              hover:shadow-card-hover duration-300 w-full">
              <img
                src="/icons/contact-socials/zoom.svg"
                width={66}
                height={24}
              />
            </Link>
          </div>
          <Link
            href="#"
            className="w-full flex rounded-sm justify-center border border-grey-400
          leading-none items-center gap-xs text-[15px] font-medium p-sm">
            <img src="/icons/phone.svg" width={20} height={20} />
            <span>Mobile Phone Call</span>
          </Link>
        </div>
      </ContactPopupView>
    </Modal>
  );
};

export default TalkPopup;
