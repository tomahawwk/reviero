'use client';
import {setModalPayload} from '@/app/store/actions/modal';
import {TriangleIcon} from '@/icons/Triangle';
import {useAppDispatch} from '@/redux/hooks';
import Image from 'next/image';
import {FC, useState} from 'react';
import {IHowitem} from '../../types';

const HowItemTouch: FC<IHowitem> = ({
  title,
  description,
  icon,
  lastChild,
  firstChild,
  button,
}) => {
  const [showDescription, setShowDescription] = useState<boolean>(
    firstChild ? true : false,
  );
  const dispatch = useAppDispatch();

  const openPopupHandler = () => {
    dispatch(setModalPayload('timeline', true));
  };
  const onShowDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="flex gap-sm">
      <div className="flex flex-col items-center gap-[5px] pb-[10px]">
        <Image
          src={icon}
          width={32}
          height={32}
          alt={title}
          className="min-w-[32px]"
        />
        {!lastChild && (
          <div className="h-full w-[1px] border-l-2 border-grey-400 border-dashed" />
        )}
      </div>
      <div className="flex flex-col gap-xs pb-xl">
        <div className="text-[21px] font-medium leading-none">{title}</div>
        {showDescription && (
          <>
            <p className="text-[18px]">{description}</p>
            {button && (
              <button
                className="btn-secondary text-black text-lg"
                onClick={openPopupHandler}>
                Purchase steps
              </button>
            )}
          </>
        )}
        <button
          className="w-fit flex items-center gap-[5px]"
          onClick={onShowDescription}>
          <span className="text-md font-medium">
            Read {showDescription ? 'less' : 'more'}
          </span>
          <TriangleIcon
            width={8}
            height={8}
            className={`text-black${!showDescription ? ' rotate-180' : ''}`}
          />
        </button>
      </div>
    </div>
  );
};

export default HowItemTouch;
