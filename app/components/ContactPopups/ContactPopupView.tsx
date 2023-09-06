import {CrossIcon} from '@/icons/Cross';
import {FC} from 'react';
import {IContactPopupView} from './types';

const ContactPopupView: FC<IContactPopupView> = ({
  children,
  title,
  onClose,
  heightFit,
}) => {
  return (
    <div className={`w-full lg:w-[544px] bg-white shadow-swipeModal lg:shadow-xl lg:rounded-br-md
    lg:rounded-bl-md rounded-tl-md rounded-tr-md max-lg:pt-md ${heightFit ? "" : ""}`}>
      <div className="lg:hidden bg-grey-600 w-[52px] h-[4px] rounded-[4px] absolute
        left-0 right-0 m-auto top-[8px]" />
      <div className="relative w-full p-sm lg:border-b border-grey-600">
        <span className="w-full text-center font-bold leading-none block max-lg:text-lg">
          {title}
        </span>
        <CrossIcon
          onClick={onClose}
          width={12}
          height={12}
          className="absolute top-0 bottom-0 m-auto right-md cursor-pointer"
        />
      </div>
      <div className={`py-md px-sm lg:p-md ${!heightFit  ? "no-swiping max-lg:overflow-y-auto max-lg:h-[calc(100vh-149px)]" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default ContactPopupView;
