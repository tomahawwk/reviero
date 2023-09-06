import ServiceLinks from '../ServiceLinks';

const Ownership = () => {
  return (
    <div
      className="relative w-full overflow-hidden rounded-md
    bg-[url('/images/ownership-background.jpg')] bg-cover px-sm py-md md:p-lg md:h-auto">
      <b className="text-[24px] md:text-[32px] text-white font-medium">Ownership demo</b>
      <p className="text-grey-600">Expirience as an owner in our App</p>
      <ServiceLinks />
      <img src="/images/ownership.png" className="h-[230px] object-contain left-[-16px] md:left-auto
       md:h-auto md:right-lg md:absolute mb-[-24px] bottom-0 md:max-w-1/2 object-bottom" />
    </div>
  );
};

export default Ownership;
