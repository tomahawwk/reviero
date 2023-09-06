import {FC, PropsWithChildren} from 'react';

const Title: FC<PropsWithChildren> = ({children}) => {
  return (
    <div className="text-h1 max-md:text-[28px] max-sm:text-[22px] font-medium">
      {children}
    </div>
  );
};

export default Title;
