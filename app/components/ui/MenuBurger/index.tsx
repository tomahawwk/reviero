import {FC} from 'react';
import {IMenuBurger} from './types';

const MenuBurger: FC<IMenuBurger> = ({clickEvent, isActive}) => {
  return (
    <div className={`z-40 right-sm top-[16px] sm:top-[19px] sm:right-md md:right-lg burger${isActive ? " is-active" : ""}`} onClick={clickEvent}>
      <span />
    </div>
  );
};

export default MenuBurger;
