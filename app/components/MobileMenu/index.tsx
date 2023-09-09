'use client';
import {getModalSelector} from '@/app/store/reducers/modal/modal';
import {useAppSelector} from '@/redux/hooks';
import Modal from '../Modal';
import Ownership from '../Ownership';
import Socials from '../Socials';
import MobileMenuItem from '../ui/MobileMenuItem';

const MobileMenu = () => {
  const {menu} = useAppSelector(getModalSelector);

  return (
    <Modal open={menu.open} view="left" name="menu">
      <div className="flex flex-col gap-[32px] py-xl">
        <div className="flex flex-col gap-sm">
          <MobileMenuItem link="/" text="Home" />
          <MobileMenuItem link="/marketplace" text="Marketplace" />
          <MobileMenuItem link="/faq" text="FAQ" />
        </div>
        <Socials isRounded />
        <Ownership />
      </div>
    </Modal>
  );
};

export default MobileMenu;
