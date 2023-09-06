import LazyImage from '@/app/components/ui/LazyImage';
import breakpoints from '@/breakpoints';
import {useMediaQuery} from 'react-responsive';

const RevieroAI = () => {
  const lessLG = useMediaQuery({query: `(max-width: ${breakpoints.lg}px)`});

  return (
    <div
      className="w-full flex flex-col-reverse lg:grid lg:grid-cols-[4fr_6fr] rounded-bl-lg rounded-br-lg
        lg:rounded-tr-lg lg:rounded-tl-lg overflow-hidden max-lg:mb-[80px]">
      <div className="relative max-lg:h-[340px]">
        <LazyImage
          className="h-full object-cover max-lg:w-full"
          src="/images/ai-background.jpg"
        />
        <img
          className="absolute w-[400px] xl:w-[480px] lg:top-[50px] z-10 right-[-100px] xl:right-[-150px]
          object-contain max-lg:left-0 max-lg:right-0 m-auto top-[-120px]"
          src="/images/ai-details.png"
        />
      </div>
      <div className="bg-grey-300 pt-xl pb-[140px] lg:pt-[80px] lg:pb-[88px] px-sm lg:pr-xl lg:pl-[150px] xl:pl-[250px] flex flex-col
        gap-md">
        <div className="text-[44px] lg:text-[56px] font-medium leading-none">Reviero AI</div>
        <p className="text-[18px] lg:text-[20px]">
          Reviero AI helps investors determine the expected rental income from
          their property. It takes into account various factors such as the
          rental rate, occupancy rate, and operating expenses to estimate the
          total earnings. Reviero is designed to provide investors with a
          comprehensive and accurate picture of the potential return on their
          investment, allowing them to make informed decisions about their
          rental property investments.
        </p>
        {!lessLG && <a href="#" className="btn-secondary w-fit text-black font-medium">How it Works</a>}
      </div>
    </div>
  );
};

export default RevieroAI;
