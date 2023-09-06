import {FC, PropsWithChildren} from 'react';

const Page: FC<PropsWithChildren> = ({children}) => {
  return (
    <div className="wrapper py-sm md:py-lg w-full">
      {children}
    </div>
  );
};

export default Page;
