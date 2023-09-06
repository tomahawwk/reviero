'use client';
import Image from 'next/image';
import {FC} from 'react';
import {IHowitem} from '../../types';
import {useDispatch} from 'react-redux';
import { setModalPayload } from '@/app/store/actions/modal';

const HowItemDesktop: FC<IHowitem> = ({
  title,
  description,
  icon,
  isDarkLine,
  lastChild,
  button,
}) => {
  const dispatch = useDispatch();
  const openPopupHandler = () => {
    dispatch(setModalPayload('timeline', true));
  };

  return (
    <div className={`${!lastChild && 'border-r-[1px] border-grey-600'}`}>
      <div
        className={`h-[300px] flex items-end px-md py-md mr-[-1px] border-b-[4px]
      ${isDarkLine ? 'border-primary-lightVariant' : 'border-primary-main'}`}>
        <div className="flex items-center gap-xs">
          <Image src={icon} width={32} height={32} alt={title} />
          <span className="text-[21px] font-medium leading-none">{title}</span>
        </div>
      </div>
      <div className="flex flex-col gap-sm h-fit p-md pb-xl">
        <p className="text-grey-800">{description}</p>
        {button && (
          <button
            className="w-fit leading-none text-blue text-[18px] font-medium outline-none"
            onClick={openPopupHandler}>
            Learn more
          </button>
        )}
      </div>
    </div>
  );
};

export default HowItemDesktop;
