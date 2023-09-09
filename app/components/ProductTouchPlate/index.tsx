import {setModalPayload} from '@/app/store/actions/modal';
import {PhoneFilledIcon} from '@/icons/PhoneFilled';
import {useAppDispatch} from '@/redux/hooks';
import Link from 'next/link';

const ProductTouchPlate = () => {
  const dispatch = useAppDispatch();

  const onButtonClick = () => {
    dispatch(setModalPayload('contact', true));
  };

  return (
    <div
      className="sticky w-screen bg-white bottom-0 left-0 pt-[8px] pb-md px-sm
        rounded-tr-md rounded-tl-md shadow-swipeModal flex gap-sm z-20">
      <Link
        href="#"
        className="w-[56px] h-[56px] rounded-sm border-2 min-w-[56px]
            border-primary-main flex items-center justify-center">
        <PhoneFilledIcon className="text-primary-main" width={16} height={16} />
      </Link>
      <button
        className="btn-primary flex flex-col p-xs w-full items-center
        h-[56px]"
        onClick={onButtonClick}>
        <b className="text-[18px] leading-none">Book</b>
        <span className="text-sm opacity-70">Request a Call</span>
      </button>
    </div>
  );
};

export default ProductTouchPlate;
