import {setModalPayload} from '@/app/store/actions/modal';
import {getModalSelector} from '@/app/store/reducers/modal/modal';
import breakpoints from '@/breakpoints';
import Link from 'next/link';
import {useDispatch, useSelector} from 'react-redux';
import {useMediaQuery} from 'react-responsive';
import Modal from '../Modal';
import ContactPopupView from './ContactPopupView';

const TourPopup = () => {
  const lessLG = useMediaQuery({query: `(max-width: ${breakpoints.lg}px)`});
  const {tour} = useSelector(getModalSelector);
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(setModalPayload('tour', false));
  };

  return (
    <Modal
      open={tour.open}
      className="z-50"
      view={lessLG ? 'swipeable' : 'center'}
      heightFit
      name="tour">
      <ContactPopupView title="Book a Video Tour" onClose={onClose} heightFit>
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
          </div>
        </div>
      </ContactPopupView>
    </Modal>
  );
};

export default TourPopup;
