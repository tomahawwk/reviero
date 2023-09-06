import {FC, PropsWithChildren} from 'react';

const CardItems: FC<PropsWithChildren> = ({children}) => {
  return (
    <div className="grid grid-cols-1 sm:max-md:grid-cols-2 md:max-lg:grid-cols-2
    lg:max-xl:grid-cols-3 xl:grid-cols-4 gap-x-md gap-y-lg">
      {children}
    </div>
  );
};

export default CardItems;
